import React from "react";
import { useContext } from "react";
import { musicContext } from "../App";

function Playpause() {
  let context = useContext(musicContext);

  const play = () => {
    context.setPlaying(true);
    context.setCurrentPlaying(true)
      context.music.play();
      context.setAnother(true)
    };

  const pause = () => {
    context.setPlaying(false);
    context.setCurrentPlaying(true)
      context.music.pause();
      context.setAnother(false)
  }  
  return (
    <button
      className="btn text-light"
      style={{
        outline: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
      onClick={context.playing ? pause : play}
    >
      {context.playing ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          className="bi bi-pause-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          className="bi bi-play-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
      )}
    </button>
  );
}

export default Playpause;
