import React, { useContext} from "react";
import { musicContext } from "../App";
import Service from "../Components/Service";

function Forword() {
  let context = useContext(musicContext);

  let next = () => {
    if(context.snext === context.data.length-1){
      context.setSnext(0);
      context.music.pause()
      context.setAnother(false)
      if(context.another === false){
        context.setMinutes(0);
        context.setSeconds(0);
      }
      context.setMusic(new Audio(context.data[0].audio))
    }
    else if(context && context.data && context.data.length){
      context.music.pause();
      context.snext++;
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
    <Service/>
  };
  
  return (
    <div>
      <button
        className=" btn text-light"
        style={{
          outline: "none",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
        onClick={() => next()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-skip-forward-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.271 5.055a.5.5 0 0 1 .52.038L7.5 7.028V5.5a.5.5 0 0 1 .79-.407L11 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935a.5.5 0 0 1-.79-.407V8.972l-2.71 1.935A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
      </button>
    </div>
  );
}

export default Forword;
