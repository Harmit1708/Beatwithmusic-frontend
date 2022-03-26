import React, { useContext } from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { musicContext } from "../App";

function RandomPlay() {
  let context = useContext(musicContext);

  let random = () => {
    if (context && context.data && context.data.length) {
      context.music.pause();
      context.setAnother(false);
      if (context.another === false) {
        context.setMinutes(0);
        context.setSeconds(0);
      }
      let rn = Math.floor(
        Math.random() * (1 - context.data.length) + context.data.length
      );
      context.snext = rn;
      context.setSnext(rn)
      context.music = new Audio(context.data[context.snext].audio);
      console.log(rn);
      context.setMusic(context.music);
      context.setCurrentPlaying(true)
      context.music.play();
      context.setCurrentPlay(context.data[rn])
      console.log(context.currentPlay);
      context.setAnother(true);
      if (context.another === true) {
        context.setMinutes(0);
        context.setSeconds(0);
      }
    }
  };

  return (
    <>
      <span onClick={() => random()} style={{ cursor: "pointer" }}>
        <ShuffleIcon style={{fontSize:"35px"}}/>
      </span>
    </>
  );
}

export default RandomPlay;
