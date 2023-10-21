import { NextRequest, NextResponse } from "next/server";

let races = [
  {"circuit": "spa", "cars": "Old LMP", "maxIr": 800},
  {"circuit": "nurburgring", "cars": "F1", "maxIr": 1200},
  {"circuit": "yas_marina", "cars": "Muscle", "maxIr": 400}
]

export async function GET(request: NextRequest) {
  return NextResponse.json({ data: races });
}
