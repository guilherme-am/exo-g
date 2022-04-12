import React from 'react'
import pic from "./X.png";
import "@fontsource/ibm-plex-sans";

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'IBM Plex Sans'
    }}>
      <h1 style={{
        color: '#09aeb8',
        margin: 0
      }}> EXO.G Portal, cooming soon.</h1>
      <p> an EXO Innovation Sustainability Project </p>
      <img src={pic} alt="exo logo"></img>
    </div>
  )
}

export default App