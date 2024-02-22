import { deleteUserByEmail, findUserByEmail } from "@/models/userMethods";
import { NextResponse } from "next/server";

export async function GET(request: Request,
    { params }: { params: { email: string } }) {
    try {
      const {email} = params;
      const res = await findUserByEmail(email);
      return NextResponse.json({ user:  JSON.stringify(res)});
    } catch (error) {
      return NextResponse.error();
    }
  }

  export async function DELETE(request: Request,
    { params }: { params: { email: string } }) {
    try {
      const {email} = params;
      await deleteUserByEmail(email);
      return NextResponse.json({ status: 201 });
    } catch (error) {
      return NextResponse.error();
    }
  }