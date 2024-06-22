"use client";

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { initializeAudio } from "@/hooks/useAudio";
import ImageLoader from "../loader/ImageLoader";

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
      <ImageLoader
        src={!isPlayingMusic ? '/icons/soundoff.png' : '/icons/soundon.png'}
        alt="jukebox"
        id="sound-icon"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className="w-10 h-10 cursor-pointer object-contain"
      />
    </div>
  );
};

export default Audio;
