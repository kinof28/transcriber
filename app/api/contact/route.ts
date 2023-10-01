import { ContactForm, ContactSchema } from "@/models/contact.model";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (req: NextRequest) => {
  const json = await req.json();
  console.log("received: ", json);
  try {
    const contactValues: ContactForm = ContactSchema.parse(json);
    return NextResponse.json({
      Message: `every thing is fine`,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        errorMessage: (error as ZodError).errors[0].message,
      },
      { status: 400 }
    );
  }
};
