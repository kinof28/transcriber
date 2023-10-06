import transporter from "@/lib/email_transporter";
import { ContactForm, ContactSchema } from "@/models/contact.model";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (req: NextRequest) => {
  const json = await req.json();
  console.log("received: ", json);

  try {
    const contactValues: ContactForm = ContactSchema.parse(json);
    try {
      const info = await transporter.sendMail({
        from: contactValues.email,
        to: "ab28fx@gmail.com,hamadouche.abdelwahab@gmail.com",
        subject: `message from transcriber: ${contactValues.subject}`,
        html: `<h1>${contactValues.subject}</h1> <b> from: ${contactValues.email}</b> <br/> <p> ${contactValues.message} </p> `,
      });
      console.log("message sent: ", info.messageId);
      return NextResponse.json(
        {
          Message: `message sent successfully`,
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          Message: `some error happened in sending the email, please check the server configuration`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        errorMessage: (error as ZodError).errors[0].message,
      },
      { status: 400 }
    );
  }
};
