import { deleteAtelierById, findAtelierById } from "@/models/atelierMethods";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = params;
    const res = await findAtelierById(id);
    return NextResponse.json({ user: JSON.stringify(res) });
  } catch (error) {
    return NextResponse.error();
  }
}
export async function DELETE(request: Request,
  { params }: { params: { id: number } }) {
  try {
    const { id } = params;
    const res = await deleteAtelierById(id);
    return NextResponse.json({ status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}
