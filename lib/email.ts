import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false, // true for port 465, false for other ports like 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // This is often needed in cloud environments like Railway 
    // to avoid certificate validation issues
    rejectUnauthorized: false
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

const businessEmail = process.env.BUSINESS_EMAIL || process.env.SMTP_USER || "";

/* ══════════ Contact form → email to business ══════════ */
export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  await transporter.sendMail({
    from: `"${data.name}" <${data.email}>`,
    to: businessEmail,
    replyTo: data.email,
    subject: `[Contact] ${data.subject}`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; padding: 30px; background: linear-gradient(135deg, #fff5f7, #fce7f3); border-radius: 16px;">
        <h2 style="color: #ec4899; margin-bottom: 20px;">💌 New Contact Message</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Name</td><td style="padding: 8px 0; color: #1f2937;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email</td><td style="padding: 8px 0; color: #1f2937;">${data.email}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Subject</td><td style="padding: 8px 0; color: #1f2937;">${data.subject}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 12px; color: #374151;">
          <p style="margin: 0;">${data.message.replace(/\n/g, "<br>")}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">Sent from Luxe Beauty Lounge website contact form</p>
      </div>
    `,
  });
}

/* ══════════ Booking confirmation → email to customer ══════════ */
export async function sendBookingConfirmation(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}) {
  // Email to customer
  await transporter.sendMail({
    from: `"Luxe Beauty Lounge" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `✅ Booking Confirmed — ${data.service}`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; padding: 30px; background: linear-gradient(135deg, #fff5f7, #fce7f3); border-radius: 16px;">
        <h2 style="color: #ec4899; margin-bottom: 8px;">💖 Booking Confirmed!</h2>
        <p style="color: #6b7280; margin-bottom: 24px;">Hi ${data.name}, your appointment has been confirmed.</p>
        
        <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; font-weight: bold; color: #6b7280; width: 120px;">Service</td><td style="padding: 10px 0; color: #1f2937;">${data.service}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold; color: #6b7280;">Date</td><td style="padding: 10px 0; color: #1f2937;">${data.date}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold; color: #6b7280;">Time</td><td style="padding: 10px 0; color: #1f2937;">${data.time}</td></tr>
            ${data.message ? `<tr><td style="padding: 10px 0; font-weight: bold; color: #6b7280;">Notes</td><td style="padding: 10px 0; color: #1f2937;">${data.message}</td></tr>` : ""}
          </table>
        </div>

        <p style="color: #6b7280; font-size: 14px;">If you need to reschedule or cancel, please contact us at <a href="mailto:${businessEmail}" style="color: #ec4899;">${businessEmail}</a></p>
        <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">Luxe Beauty Lounge • Where expertise meets elegance</p>
      </div>
    `,
  });

  // Notification to business
  await transporter.sendMail({
    from: `"Luxe Beauty Website" <${process.env.SMTP_USER}>`,
    to: businessEmail,
    subject: `📅 New Booking: ${data.service} — ${data.name}`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; padding: 30px; background: linear-gradient(135deg, #fff5f7, #fce7f3); border-radius: 16px;">
        <h2 style="color: #ec4899; margin-bottom: 20px;">📅 New Appointment Booked</h2>
        <div style="background: white; padding: 20px; border-radius: 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Customer</td><td style="padding: 8px 0; color: #1f2937;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email</td><td style="padding: 8px 0; color: #1f2937;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone</td><td style="padding: 8px 0; color: #1f2937;">${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Service</td><td style="padding: 8px 0; color: #1f2937;">${data.service}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Date</td><td style="padding: 8px 0; color: #1f2937;">${data.date}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Time</td><td style="padding: 8px 0; color: #1f2937;">${data.time}</td></tr>
            ${data.message ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Notes</td><td style="padding: 8px 0; color: #1f2937;">${data.message}</td></tr>` : ""}
          </table>
        </div>
      </div>
    `,
  });
}
