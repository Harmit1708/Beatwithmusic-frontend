import React from "react";
import Service from '../Components/Service'

function Home() {
  return (
    <div className="container">
      <h2 className="font-link text-center" style={{ marginTop: "110px" }}>
        Come, let us sing for joy
      </h2>
      <div
        className="bg-dark text-light"
        style={{
          height: "500px",
          marginTop: "120px",
          boxShadow: "0 0 20px crimson",
          borderRadius: "20px",
        }}
      >
        <Service/>
        </div>  
      </div>
  );
}

export default Home;
