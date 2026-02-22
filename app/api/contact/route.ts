import { NextRequest, NextResponse } from "next/server";
import { initDB, saveContactMessage } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Validate
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Ensure tables exist
        await initDB();

        // Save to database
        await saveContactMessage({ name, email, subject, message });

        // Try sending email (don't fail the request if email fails)
        let emailSent = false;
        try {
            await sendContactEmail({ name, email, subject, message });
            emailSent = true;
        } catch (emailErr) {
            console.error("Email sending failed (message still saved to DB):", emailErr);
        }

        return NextResponse.json({
            success: true,
            message: emailSent
                ? "Message sent successfully!"
                : "Message saved! Email notification could not be sent at this time.",
        });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
