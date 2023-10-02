"use client";
import { useReducer } from "react";

import Input from "./Input";
import Button from "./Button";
import type { ContactForm } from "@/models/contact.model";
import { ContactSchema } from "@/models/contact.model";
import { ZodError } from "zod";

const actions = {
  setEmail: "SET_EMAIL",
  setName: "SET_NAME",
  setSubject: "SET_SUBJECT",
  setMessage: "SET_MESSAGE",
  reset: "RESET",
};
const initialState: ContactForm = {
  email: "",
  name: "",
  subject: "",
  message: "",
};
const reducer = (
  state: ContactForm,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case actions.setEmail:
      return { ...state, email: action.payload };
    case actions.setName:
      return { ...state, name: action.payload };
    case actions.setSubject:
      return { ...state, subject: action.payload };
    case actions.setMessage:
      return { ...state, message: action.payload };
    case actions.reset:
      return initialState;
    default:
      throw new Error("there is no action with the name: " + action.type);
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, dispatchErrors] = useReducer(reducer, initialState);
  const onSubmit = async () => {
    if (validate("")) {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(state),
      });
      const val = await response.json();
      console.log(val);
    } else {
      console.log("invalid form inputs");
    }
  };
  const validate = (
    input: "" | "email" | "name" | "subject" | "message"
  ): boolean => {
    const parseResult = ContactSchema.safeParse(state);
    if (input === "") dispatchErrors({ type: actions.reset });
    else dispatchErrors({ type: `set_${input}`.toUpperCase(), payload: "" });

    if (!parseResult.success) {
      const errors = parseResult.error.errors;
      errors.forEach((error) => {
        if (input !== "" && input !== `${error.path[0]}`) return;
        dispatchErrors({
          type: `set_${error.path[0]}`.toUpperCase(),
          payload: error.message,
        });
      });
    }
    return parseResult.success;
  };
  return (
    <div className="flex flex-col gap-2 pb-4 ">
      <Input
        type="email"
        value={state.email}
        placeholder="Your Email *"
        onchange={(value: string) => {
          dispatch({ type: actions.setEmail, payload: value });
        }}
        error={errors.email}
        onblur={() => validate("email")}
        onfocus={() => dispatchErrors({ type: actions.setEmail, payload: "" })}
      />
      {/* name */}
      <Input
        type="text"
        value={state.name}
        placeholder="Your Name *"
        onchange={(value: string) =>
          dispatch({ type: actions.setName, payload: value })
        }
        onblur={() => validate("name")}
        onfocus={() => dispatchErrors({ type: actions.setName, payload: "" })}
        error={errors.name}
      />

      {/* subject */}
      <Input
        type="text"
        value={state.subject}
        placeholder="The Subject"
        onchange={(value: string) =>
          dispatch({ type: actions.setSubject, payload: value })
        }
        onblur={() => validate("subject")}
        onfocus={() =>
          dispatchErrors({ type: actions.setSubject, payload: "" })
        }
        error={errors.subject}
      />
      {/* message */}
      <Input
        type="textarea"
        value={state.message}
        placeholder="The Message *"
        onchange={(value: string) =>
          dispatch({ type: actions.setMessage, payload: value })
        }
        onblur={() => validate("message")}
        onfocus={() =>
          dispatchErrors({ type: actions.setMessage, payload: "" })
        }
        error={errors.message}
      />

      <Button
        value="Send"
        className="bg-white text-indigo-700 border-2 border-indigo-300 hover:shadow-md hover:shadow-indigo-300"
        onClick={onSubmit}
      />
    </div>
  );
};

export default ContactForm;
