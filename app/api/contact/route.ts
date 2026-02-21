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

        // Send email
        await sendContactEmail({ name, email, subject, message });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully!",
        });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
