// Imported Required Files
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Home from "../src/Components/Home";
import Login from './Components/login'
import Signup from './Components/signup'
import Header from './Components/Header'
// Api Url
export const url = "https://beatwithmusic.herokuapp.com";


// Create Context
export const musicContext = React.createContext();

function App() {
  let [data, setData] = useState([]);
  
  let [snext, setSnext] = useState(0);

  let [music, setMusic] = useState();

  let [another,setAnother] = useState(true);

  let [minutes,setMinutes] = useState('0'); 
  let [seconds,setSeconds] = useState('0'); 

  let [currentDuration,setCurrentDuration] = useState()

  let [play,setPlay] = useState(false)

  let [aList,setAlist] = useState(false)


  let [playing, setPlaying] = useState(false);


  let [currentPlay,setCurrentPlay] = useState([]);

  let [currentPlaying,setCurrentPlaying] = useState(false)

  
  useEffect(() =>{
    getData();
  },[])

  let getData = async () => {
    let res = await axios.get(`${url}/users/songs`);
    if (res.data.statusCode === 200) {
      setData(res.data.data);
      setAnother(false)
      setMusic(new Audio(res.data.data[0].audio));
    } else {
      console.log(res.data.message);
    }
  }
  



  
  return (
    <BrowserRouter>
      <musicContext.Provider
        value={{
          data,
          snext,
          another,
          play,
          setPlay,
          setAnother,
          minutes,
          setMinutes,
          seconds,
          setSeconds,
          setSnext,
          music,
          setMusic,
          currentDuration,
          setCurrentDuration,
          aList,
          setAlist,
          playing,
          setPlaying,
          currentPlay,
          setCurrentPlay,
          currentPlaying,
          setCurrentPlaying
        }}
      >
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </musicContext.Provider>
    </BrowserRouter>
  );
}

export default App;
