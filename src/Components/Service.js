import React, { useContext, useEffect } from "react";
import { musicContext } from "../App";
import Forword from "../Components/Forword";
import Backword from "../Components/Backword";
import Playpause from "./Playpause";

function Service() {

  let context = useContext(musicContext);
    if (context && context.data && context.data.length) {
        var store = context.data.findIndex((c) => c.name === context.data[context.snext].name);
        var data = context.data[store]; 
        var duration = data?.duration 
      }
      
      useEffect(()=>{
        context.setCurrentDuration(context.minutes + ":" + context.seconds);
          if(context.another === true){
            const intervalID = setInterval(()=>{
              context.setSeconds(parseInt(context.seconds) + 1)
              if(parseInt(context.seconds) === 60){
                context.setMinutes(parseInt(context.minutes) + 1);
                context.setSeconds(0)
              }
              else if(context.currentDuration === duration){
                context.setMinutes(0)
                context.setSeconds(0)
                context.setAnother(false)  
              }
              },1000)
            return () => clearTimeout(intervalID)
          }
    })

    
  return (
    <>
      {<div
        className="bg-dark"
        key={1}
        style={{ display: "flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}
      >
        <div className="m-auto" style={{ paddingTop: "20px" }}>
          <img
            className="disk"
            src={data?.img}
            alt=""
            style={{ height: "300px", width: "300px" }}
          />
          <p className="mt-3 text-center">Name : {data?.name}</p>
          <p className="text-center">Artist : {data?.artists}</p>
        </div>
        <div className="m-auto pb-auto" style={{ paddingTop: "200px " }}>
          <div className="song-slider">
            <input type="range" value={0} className="seek-bar"/>
            <span className="current-time" >{context.minutes + ":" + context.seconds}</span>
            <span className="song-duration">{data?.duration}</span>
          </div>
          <br></br>
          <div className="d-flex">
            <Backword />
            <Playpause />
            <Forword />
          </div>
        </div>  
      </div>}
    </>
  );
}
export default Service;
