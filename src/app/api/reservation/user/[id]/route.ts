import { findReservationByIds } from "@/models/reservationMethods";
import { findUserByAtelier } from "@/models/userMethods";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = params;
    const res = await findUserByAtelier(id);
    return NextResponse.json({ reservation: JSON.stringify(res) });
  } catch (error) {
    return NextResponse.error();
  }
}
