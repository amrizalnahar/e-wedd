"use client";

import { useEffect, useRef, useState } from "react";
import { weddingConfig } from "@/config/wedding";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Try autoplay on mount
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!mounted) return null;

  return (
    <>
      <audio ref={audioRef} src={weddingConfig.music.src} loop preload="none" />
      <button
        id="audio-player-btn"
        onClick={toggle}
        className={`audio-btn ${playing ? "playing" : ""}`}
        aria-label={playing ? "Hentikan musik" : "Putar musik"}
        title={weddingConfig.music.title}
      >
        {playing ? (
          /* Animated sound bars */
          <span className="bars" aria-hidden="true">
            <span className="bar" style={{ height: "6px" }} />
            <span className="bar" style={{ height: "12px" }} />
            <span className="bar" style={{ height: "8px" }} />
            <span className="bar" style={{ height: "14px" }} />
          </span>
        ) : (
          /* Static muted icon */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  );
}
