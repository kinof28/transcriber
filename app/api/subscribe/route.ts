import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AuthSchema } from "@/models/auth.model";
import { ZodError } from "zod";

export const POST = async (req: NextRequest) => {
  const json = await req.json();
  console.log("received on subscribe route: ", json);
  try {
    const data = AuthSchema.parse(json);
    return NextResponse.json(
      {
        message: "for now every thing is fine",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error((error as ZodError).errors);
    return NextResponse.json(
      {
        message:
          "input not valid,{email:valid email, password: at least 6 characters}",
      },
      { status: 400 }
    );
  }
};
