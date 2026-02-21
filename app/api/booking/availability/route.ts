import { NextRequest, NextResponse } from "next/server";
import { initDB, getBookedSlots } from "@/lib/db";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const date = searchParams.get("date");

        if (!date) {
            return NextResponse.json(
                { error: "Date parameter is required" },
                { status: 400 }
            );
        }

        await initDB();

        const bookedSlots = await getBookedSlots(date);

        return NextResponse.json({ date, bookedSlots });
    } catch (error) {
        console.error("Availability API error:", error);
        return NextResponse.json(
            { error: "Failed to check availability" },
            { status: 500 }
        );
    }
}
