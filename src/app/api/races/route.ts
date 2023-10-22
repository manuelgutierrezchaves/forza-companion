import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const races = await prisma.race.findMany();
    return NextResponse.json({ data: races });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ data: [] });
  }
}
