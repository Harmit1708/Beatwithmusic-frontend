import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Service from '../Components/Service'
import axios from 'axios'
import Header from '../Components/Header'
function Home() {

  let navigate = useNavigate();
  useEffect(()=>{
    checkAuth()
  },[])

  let checkAuth = async() => {
    let token = sessionStorage.getItem('token')

    if(token){
      let config = {
        headers:{
          token:token
        }
      }
      // Post data to url
      let res = await axios.post("http://localhost:4000/users/auth",{
        Purpose:"Approve"
      },config)
      if(res.data.statusCode !== 200 ){
        alert("Session Ended")
        sessionStorage.clear()
        navigate("/")
      }
    }
    else
    {
      navigate('/')
    }
  }
  return <>
  <Header/>
    <div className="container">
      <h2 className="font-link text-center mt-2" style={{ paddingTop: "110px"}}>
        Come, let us sing for joy
      </h2>
      <div
        className="bg-dark text-light"
        style={{
          height: "500px",
          marginTop: "100px",
          boxShadow: "0 0 20px crimson",
          borderRadius: "20px",
        }}
      >
        <Service/>
        </div>  
      </div>
      </>
}

export default Home;
