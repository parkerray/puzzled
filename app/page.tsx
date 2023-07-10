"use client";

import ColorChoice from "./components/ColorChoice";
import Video from "./components/Video";
import ColorBar from "./components/ColorBar";
import { useState, useEffect } from "react";

const colors = [
  { name: "white", hex: "#ffffff" },
  { name: "grey", hex: "#999999" },
  { name: "black", hex: "#000000" },
  { name: "red", hex: "#ff0000" },
  { name: "green", hex: "#00ff00" },
  { name: "blue", hex: "#0000ff" },
  { name: "yellow", hex: "#ffff00" },
  { name: "pink", hex: "#ff00ff" },
  { name: "brown", hex: "#964b00" },
];

const key = ["#ff0000", "#000000", "#ff0000", "#000000"];

export default function Home() {
  const [attempt, setAttempt] = useState(["", "", "", ""]);

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

  const setDefaultVolume = () => {
    const audioPlayer = document.querySelector("audio");
    if (audioPlayer) {
      audioPlayer.volume = 0.05;
    }
  };

  useEffect(() => {
    setDefaultVolume();
  }, []);

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen min-w-full p-8'>
        {checkAttempt(attempt) ? (
          <Video />
        ) : (
          <>
            <div className='mb-10'>
              <audio id='audio' controls loop>
                <source src='piano.ogg' type='audio/ogg'></source>
                <source src='piano.mp3' type='audio/mpeg'></source>
              </audio>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              {colors.map((color) => (
                <ColorChoice
                  key={color.name}
                  name={color.name}
                  hex={color.hex}
                  action={() => updateAttempt(color.hex)}
                />
              ))}
            </div>
            <ColorBar colors={attempt} />
          </>
        )}
      </div>
    </>
  );
}
