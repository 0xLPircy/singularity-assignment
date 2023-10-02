"use client";
import Image from "next/image";
import { LoginSignup } from "./components";
import React, { useState } from "react";

export default function Home() {
  const [vis, SetVis] = useState("false");
  const changeVis = () => {
    SetVis("true");
  };
  console.log(vis);
  return (
    <div>
      <div className="grid grid-flow-col gap-20 h-[100vh] w-[100vw] text-[#eeeeee] bg-[#2121216a]">
        {" "}
        <button
          onClick={changeVis}
          className="inset-0 bg-[#0d7dff] px-6 py-2 rounded-full  w-fit h-fit border-2 border-solid border-[#eeeeeee] self-center place-self-end hover:bg-[#3499ff]"
        >
          Login/ SignUp
        </button>{" "}
        <button className="inset-0 bg-[#0d7dff] px-6 py-2 rounded-full w-fit h-fit border-2 border-solid border-[#eeeeeee] self-center place-self-start hover:bg-[#3499ff]">
          Book a Free Session!
        </button>
      </div>
      <LoginSignup vis={vis} onClosing={() => SetVis("false")} />
    </div>
  );
}
