'use client'

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { soundoff, soundon } from "@/public/icons";
import Image from "next/image";
import { initializeAudio } from "@/hooks/useAudio";

type Props = {};

const Audio = (props: Props) => {
  const audioRef = useRef<HTMLAudioElement | undefined>(initializeAudio());
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic && audioRef.current) {
      audioRef.current
        .play()
        .then(() => console.log("Play audio"))
        .catch((e) => console.log(e));
    }
    return () => audioRef.current?.pause();
  }, [isPlayingMusic]);
  return (
    <div className="absolute bottom-2 left-2">
      <Image
        src={!isPlayingMusic ? soundoff : soundon}
        alt="jukebox"
        id="sound-icon"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className="w-10 h-10 cursor-pointer object-contain"
      />
    </div>
  );
};

export default Audio;
