import React, { useContext } from "react";
import { musicContext } from "../App";
function Backword() {
  let context = useContext(musicContext);

  let prev = () => {
    if(context && context.data && context.data.length){
      if(context.snext === 0){
        context.setAnother(false)
        if(context.another === false){
          context.setMinutes(0);
          context.setSeconds(0);
        }
        context.music.pause()
        context.music = new Audio(context.data[context.snext].audio);
        context.setSnext(0)
        context.setMusic(context.music);
        context.music.play()
      }
      context.music.pause();
      context.snext--;
      context.music = new Audio(context.data[context.snext].audio);
      context.music.play();
      context.setSnext(context.snext);
      context.setMusic(context.music);
      context.setAnother(true)
      if(context.another === true){
        context.setMinutes(0);
          context.setSeconds(0);  
      }
    }
  };


  return (
    <div>
      <button
        className=" btn text-light"
        style={{
          marginLeft: "85px",
          outline: "none",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
        onClick={() => prev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-skip-backward-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445z" />
        </svg>
      </button>
    </div>
  );
}

export default Backword;
