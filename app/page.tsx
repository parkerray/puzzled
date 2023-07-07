"use client";

import ColorChoice from "./components/ColorChoice";
import Video from "./components/Video";
import { useState } from "react";

const colors = [
  { name: "white", hex: "#ffffff" },
  { name: "grey", hex: "#999999" },
  { name: "black", hex: "#000000" },
  { name: "red", hex: "#ff0000" },
  { name: "green", hex: "#00ff00" },
  { name: "blue", hex: "#0000ff" },
];

const key = ["red", "black", "red", "black"];

export default function Home() {
  const [attempt, setAttempt] = useState(["blue", "blue", "blue", "blue"]);

  const updateAttempt = (color: string) => {
    setAttempt([attempt[1], attempt[2], attempt[3], color]);
    console.log(`colors colors colors colors...`);
  };

  const checkAttempt = (attempt: any) => {
    let correctAnswers = 0;
    for (let i = 0; i < 4; i++) {
      if (key[i] == attempt[i]) {
        correctAnswers++;
      }
    }
    return correctAnswers >= 4;
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen min-w-full p-8'>
      {checkAttempt(attempt) ? (
        <Video />
      ) : (
        <>
          <div className='mb-10'>
            <audio controls loop>
              <source src='notes.ogg' type='audio/ogg'></source>
              <source src='notes.mp3' type='audio/mpeg'></source>
            </audio>
          </div>
          <div className='grid grid-cols-3 gap-6'>
            {colors.map((color) => (
              <ColorChoice
                key={color.name}
                name={color.name}
                hex={color.hex}
                action={() => updateAttempt(color.name)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
