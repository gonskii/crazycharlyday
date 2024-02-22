import { findAtelierByDate } from "@/models/atelierMethods";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { date: string } }
  ) {
    try {
      const { date } = params;
      const res = await findAtelierByDate(date);
      return NextResponse.json({ user: JSON.stringify(res) });
    } catch (error) {
      return NextResponse.error();
    }
  }