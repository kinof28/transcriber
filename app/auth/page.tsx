"use client";
import { useState } from "react";
import Input from "../_components/UI/Input";
import Button from "../_components/UI/Button";
import { AuthSchema } from "@/models/auth.model";
import { useRouter } from "next/navigation";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [login, setLogin] = useState(false);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };
  const onLogin = () => {
    if (validate("")) {
    } else {
      console.log("form input not valid");
    }
  };
  const onSubscribe = async () => {
    if (pending) return;
    if (validate("")) {
      setPending(true);
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          body: JSON.stringify({ email, password }),
        });
        const val = await response.json();
        console.log(val);
        if (response.status === 200) {
          // router.replace("/");
        } else {
          setMessage(val.message);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setPending(false);
      }
    } else {
      console.log("form input not valid");
    }
  };
  const validate = (input: "" | "email" | "password") => {
    const parseResult = AuthSchema.safeParse({
      email,
      password,
    });
    if (!parseResult.success) {
      parseResult.error.errors.forEach((e) => {
        if ((input === "email" || input === "") && e.path[0] === "email")
          setEmailError(e.message);
        else if (
          (input === "password" || input === "") &&
          e.path[0] === "password"
        )
          setPasswordError(e.message);
      });
    }
    return parseResult.success;
  };
  return (
    <div className="bg-gradient-to-r from-[#9f56db] to-[#5a4cdb] p-16 text-white flex flex-col gap-8 min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-center">
        {login
          ? "Welcome Again, please enter your email and password"
          : "Join Us for free and try our best products ..."}
      </h1>
      <div className="flex justify-evenly w-full flex-col md:flex-row">
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            value={email}
            onchange={(value: string) => setEmail(value)}
            placeholder="Your Email"
            error={emailError}
            onblur={() => validate("email")}
            onfocus={() => setEmailError("")}
          />
          <Input
            type="password"
            value={password}
            onchange={(value: string) => setPassword(value)}
            placeholder="Your password"
            error={passwordError}
            onblur={() => validate("password")}
            onfocus={() => setPasswordError("")}
          />
          <p className="text-center text-red-300 text-md font-serif font-semibold md:max-w-xs px-2 ">
            {message}
          </p>
          <Button
            onClick={login ? onLogin : onSubscribe}
            value={pending ? "Pending ..." : login ? "Login" : "Subscribe"}
            className={`bg-white text-indigo-700 border-2 border-indigo-300  ${
              emailError !== "" || passwordError !== ""
                ? "shadow-md shadow-pink-300 border-pink-400 hover:shadow-md hover:shadow-pink-300"
                : "hover:shadow-md hover:shadow-indigo-300"
            }`}
          />
          <p className="mb-5 text-center">
            {login ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={toggleLogin}
              className="underline underline-offset-4 cursor-pointer font-bold hover:opacity-70"
            >
              {login ? " Subscribe" : " Login"}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <Button
            value="Continue using Google"
            className="bg-white text-indigo-700 border-2 border-indigo-300 hover:shadow-md hover:shadow-indigo-300"
            disabled={true}
          />
          <Button
            value="Continue using Github"
            className="bg-white text-indigo-700 border-2 border-indigo-300 hover:shadow-md hover:shadow-indigo-300"
            disabled={true}
          />
          <Button
            value="Continue using Facebook"
            className="bg-white text-indigo-700 border-2 border-indigo-300 hover:shadow-md hover:shadow-indigo-300 "
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
