import { db } from "@/db";
import { users } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers);
}

export async function POST(req: Request) {
  const body = await req.json();
  await db.insert(users).values({ name: body.name, email: body.email });
  return NextResponse.json({ success: true });
}
