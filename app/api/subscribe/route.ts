import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const GET = () => {
  return NextResponse.json({ text: "hello" });
};

export const POST = (req: NextRequest) => {
  return NextResponse.json({
    text: "every thing is working fine",
    url: `${JSON.stringify(req.geo)}`,
    status: "200",
  });
};
