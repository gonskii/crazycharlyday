import AtelierInterface from "@/models/atelier";
import { createAtelier, findAtelierById, updateAtelier } from "@/models/atelierMethods";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const atelier = (await request.json()) as AtelierInterface;
      await createAtelier(atelier);
      return NextResponse.json({ status: 201 });
    } catch (error) {
      return NextResponse.error();
    }
  }
  
  export async function PUT(request: Request) {
    try {
      const atelier = (await request.json()) as AtelierInterface;
      await updateAtelier(atelier);
      return NextResponse.json({ status: 201 });
    } catch (error) {
      return NextResponse.error();
    }
  }
  