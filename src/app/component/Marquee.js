"use client";
import React from "react";

export default function Marquee({ texts = [], speed = 20 }) {
  return (
    <div className="relative overflow-hidden w-full whitespace-nowrap bg-black py-4">
      <div
        className="flex animate-marquee-loop"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 min-w-max gap-6 px-4">
            {texts.map((text, index) => (
              <React.Fragment key={index}>
                <span className="text-[18px] md:text-[24px] font-bold text-white uppercase">
                  {text}
                </span>
                {index !== texts.length - 1 && (
                  <span className="text-[#F8AB1D] text-base md:text-xl font-bold">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
