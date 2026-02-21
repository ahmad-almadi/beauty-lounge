import { NextRequest, NextResponse } from "next/server";
import { initDB, isSlotAvailable, createBooking } from "@/lib/db";
import { sendBookingConfirmation } from "@/lib/email";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, service, date, time, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !service || !date || !time) {
            return NextResponse.json(
                { error: "All fields except notes are required" },
                { status: 400 }
            );
        }

        // Ensure tables exist
        await initDB();

        // Check availability
        const available = await isSlotAvailable(date, time);
        if (!available) {
            return NextResponse.json(
                { error: "This time slot is already booked. Please choose another time." },
                { status: 409 }
            );
        }

        // Create booking in DB
        const booking = await createBooking({ name, email, phone, service, date, time, message });

        // Try sending confirmation emails (don't fail request if email fails)
        let emailSent = false;
        try {
            await sendBookingConfirmation({ name, email, phone, service, date, time, message });
            emailSent = true;
        } catch (emailErr) {
            console.error("Booking email failed (booking still saved to DB):", emailErr);
        }

        return NextResponse.json({
            success: true,
            message: emailSent
                ? "Appointment booked successfully! Confirmation email sent."
                : "Appointment booked successfully! Email confirmation could not be sent at this time.",
            booking,
        });
    } catch (error) {
        console.error("Booking API error:", error);
        return NextResponse.json(
            { error: "Failed to book appointment. Please try again later." },
            { status: 500 }
        );
    }
}
