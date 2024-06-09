"use client";
import React from "react";
import Typewriter from "typewriter-effect";
type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Incredible")
          .pauseFor(200)
          .deleteAll()
          .typeString("Sexy")
          .pauseFor(200)
          .deleteAll()
          .typeString("Your new magic note pad")
          .pauseFor(200)
          .deleteAll()
          .start();
      }}
      options={{
        strings: ["Incredible", "Sexy", "Your new magic note pad"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterTitle;
