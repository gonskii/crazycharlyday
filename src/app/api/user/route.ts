import UserInterface from "@/models/user";
import { createUser, findUserByEmail, updateUser } from "@/models/userMethods";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const user = (await request.json()) as UserInterface;
    await createUser(user);
    return NextResponse.json({ status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function PUT(request: Request) {
  try {
    const user = (await request.json()) as UserInterface;
    await updateUser(user);
    return NextResponse.json({ status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}