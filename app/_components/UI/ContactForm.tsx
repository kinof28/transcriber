"use client";
import { useReducer } from "react";

import Input from "./Input";
import Button from "./Button";

interface stateType {
  email: string;
  name: string;
  subject: string;
  message: string;
}
const actions = {
  setEmail: "SET_EMAIL",
  setName: "SET_NAME",
  setSubject: "SET_SUBJECT",
  setMessage: "SET_MESSAGE",
};
const initialState = {
  email: "",
  name: "",
  subject: "",
  message: "",
};
const reducer = (state: stateType, action: { type: string; payload: any }) => {
  switch (action.type) {
    case actions.setEmail:
      return { ...state, email: action.payload };
    case actions.setName:
      return { ...state, name: action.payload };
    case actions.setSubject:
      return { ...state, subject: action.payload };
    case actions.setMessage:
      return { ...state, message: action.payload };
    default:
      throw new Error("there is no action with the name: " + action.type);
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col gap-2 pb-4 ">
      <Input
        type="email"
        value={state.email}
        placeholder="Your Email *"
        onchange={(value: string) =>
          dispatch({ type: actions.setEmail, payload: value })
        }
      />
      {/* name */}
      <Input
        type="text"
        value={state.name}
        placeholder="Your Name *"
        onchange={(value: string) =>
          dispatch({ type: actions.setName, payload: value })
        }
      />
      {/* subject */}
      <Input
        type="text"
        value={state.subject}
        placeholder="The Subject"
        onchange={(value: string) =>
          dispatch({ type: actions.setSubject, payload: value })
        }
      />
      {/* message */}
      <Input
        type="textarea"
        value={state.message}
        placeholder="The Message *"
        onchange={(value: string) =>
          dispatch({ type: actions.setMessage, payload: value })
        }
      />
      <Button
        value="Send"
        className="bg-white text-indigo-700 border-2 border-indigo-300 hover:shadow-md hover:shadow-indigo-300"
      />
    </div>
  );
};

export default ContactForm;
