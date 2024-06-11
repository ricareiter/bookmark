"use client";
import Image from "next/image";
import iconArrow from "@/public/icon-arrow.svg";
import { useState } from "react";

interface Props {
  custom?: string;
  title: string;
  faqAnswer: string;
}

const FaqItem = ({ custom, title, faqAnswer }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="group hover:cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`flex items-center justify-between ${
          !isActive ? "border-b" : ""
        } pt-4 pb-4 ${custom}`}
      >
        <h4 className="text-lg font-semibold text-veryDarkBlue group-hover:text-softRed">
          {title}
        </h4>
        <Image
          src={iconArrow}
          alt=""
          className={`mr-6 ${isActive ? "rotate-180" : ""}`}
        />
      </div>
      {isActive ? (
        <p
          className={`text-gray-500 text-md mt-2 mb-3 ${
            isActive ? "border-b pb-6" : ""
          }`}
        >
          {faqAnswer}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default FaqItem;
