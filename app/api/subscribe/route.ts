import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AuthSchema } from "@/models/auth.model";
import { ZodError } from "zod";
import db from "@/lib/db";
import * as bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  const json = await req.json();
  try {
    const data = AuthSchema.parse(json);
    const user = {
      email: data.email,
      password: await bcrypt.hash(data.password, 10),
    };
    try {
      const dbResponse = await db.user.create({ data: user });
      console.log(dbResponse);
      return NextResponse.json(
        {
          message: "for now every thing is fine",
        },
        { status: 200 }
      );
    } catch (error) {
      console.log("db error: ", error);
      return NextResponse.json(
        {
          message: "email already in use, please try another email",
        },
        { status: 400 }
      );
    }
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
