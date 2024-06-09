"use client";
import React from "react";
import Typewriter from "typewriter-effect";
type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("The others are writing")
          .pauseFor(100)
          .deleteAll()
          .typeString("Something")
          .pauseFor(100)
          .deleteAll()
          .typeString("Sexy")
          .pauseFor(100)
          .deleteAll()
          .start();
      }}
      options={{
        strings: ["The others are writing", "Something", "Sexy"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterTitle;
