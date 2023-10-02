import React from "react";
import { Lhs1 } from "@/app/components";
import cross from "@/assets/crossIcon.png";
import Image from "next/image";

const Booking = ({ vis, step, onClosing }) => {
  const checkArea = (e) => {
    if (e.target.id === "blurArea") {
      onClosing();
    }
  };
  return (
    <>
      {vis == "true" && (
        <div
          className="bg-[#21212198] backdrop-blur-md fixed inset-0 grid"
          onClick={checkArea}
          id="blurArea"
        >
          <div className="bg-[#ffffff] rounded-3xl place-self-center p-6 grid grid-flow-col grid-cols-2 w-[75%]">
            {step == 1 && <Lhs1 />}
            {step == 2 && <Lhs1 />}
            <div className="grid h-fit">
              <Image
                src={cross}
                height={21}
                width={21}
                onClick={onClosing}
                className="self-start place-self-end"
              />
              {step == 1 && <div className="grid grid-flow-row px-20"></div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
