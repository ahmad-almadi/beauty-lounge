import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes("localhost")
        ? false
        : { rejectUnauthorized: false },
});

/* ══════════ Initialize tables ══════════ */
export async function initDB() {
    const client = await pool.connect();
    try {
        await client.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        service VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        time VARCHAR(20) NOT NULL,
        message TEXT,
        status VARCHAR(20) DEFAULT 'confirmed',
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    } finally {
        client.release();
    }
}

/* ══════════ Booking helpers ══════════ */
export async function isSlotAvailable(date: string, time: string): Promise<boolean> {
    const result = await pool.query(
        `SELECT COUNT(*) FROM bookings WHERE date = $1 AND time = $2 AND status != 'cancelled'`,
        [date, time]
    );
    return parseInt(result.rows[0].count, 10) === 0;
}

export async function getBookedSlots(date: string): Promise<string[]> {
    const result = await pool.query(
        `SELECT time FROM bookings WHERE date = $1 AND status != 'cancelled'`,
        [date]
    );
    return result.rows.map((r) => r.time);
}

export async function createBooking(data: {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message?: string;
}) {
    const result = await pool.query(
        `INSERT INTO bookings (name, email, phone, service, date, time, message)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
        [data.name, data.email, data.phone, data.service, data.date, data.time, data.message || ""]
    );
    return result.rows[0];
}

/* ══════════ Contact helper ══════════ */
export async function saveContactMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    const result = await pool.query(
        `INSERT INTO contact_messages (name, email, subject, message)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
        [data.name, data.email, data.subject, data.message]
    );
    return result.rows[0];
}

export default pool;
