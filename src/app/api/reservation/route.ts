import ReservationInterface from "@/models/reservation";
import { createReservation, findReservationByIds, updateReservation } from "@/models/reservationMethods";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const res = (await request.json()) as ReservationInterface;
      await createReservation(res);
      return NextResponse.json({ status: 201 });
    } catch (error) {
      return NextResponse.error();
    }
  }
  
  export async function PUT(request: Request) {
    try {
      const res = (await request.json()) as ReservationInterface;
      await updateReservation(res);
      return NextResponse.json({ status: 201 });
    } catch (error) {
      return NextResponse.error();
    }
  }