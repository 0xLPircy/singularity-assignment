import React from "react";
import cross from "@/assets/crossIcon.png";
import Image from "next/image";

const LoginSignup = ({ vis, onClosing }) => {
  const checkArea = (e) => {
    if (e.target.id === "blurArea") {
      onClosing();
    }
  };
  return (
    <>
      {vis == "true" && (
        <div
          className="bg-[#21212198] backdrop-blur-md fixed inset-0 grid grid-flow-col"
          onClick={checkArea}
          id="blurArea"
        >
          <div className="bg-[#eeeeee] rounded-xl place-self-center">
            <div>
              <Image src={cross} height={30} width={30} onClick={onClosing} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignup;
