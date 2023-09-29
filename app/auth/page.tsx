"use client";
import { useState } from "react";
import Input from "../_components/UI/Input";
import Button from "../_components/UI/Button";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };
  const onLogin = () => {
    console.log("login");
  };
  const onSubscribe = () => {
    console.log("Subscribe");
  };
  return (
    <div className="bg-gradient-to-r from-[#9f56db] to-[#5a4cdb] p-16 text-white flex flex-col gap-8 h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-center">
        {login
          ? "Welcome Again, please enter your email and password"
          : "Join Us for free and try our best products... "}
      </h1>
      <div className="flex justify-evenly w-full flex-col md:flex-row">
        <div className="flex flex-col gap-8">
          <Input
            type="email"
            value={email}
            onchange={(value: string) => setEmail(value)}
            placeholder="Your Email"
          />
          <Input
            type="password"
            value={password}
            onchange={(value: string) => setPassword(value)}
            placeholder="Your password"
          />
          <Button
            onClick={login ? onLogin : onSubscribe}
            value={login ? "Login" : "Subscribe"}
            className="bg-white text-indigo-700 border-2 border-indigo-300 hover:shadow-md hover:shadow-indigo-300"
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
            className="bg-white text-indigo-700 border-2 border-indigo-300 hover:shadow-md hover:shadow-indigo-300"
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
