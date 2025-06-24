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
        src={!isPlayingMusic ? `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576214/soundoff_uuhfxk.png` : `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/v1750576239/soundon_uome4w.png`}
        alt="jukebox"
        id="sound-icon"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className="w-10 h-10 cursor-pointer object-contain"
      />
    </div>
  );
};

export default Audio;
