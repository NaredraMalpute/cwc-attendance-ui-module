import React from 'react';
import cwc from "../../assets/svg/cwc-cash-logo.svg";
import "./style.scss"

const Loader = () => {
  return (
    <div className="loader-container" style={{position:"fixed",height:"100vh",width:"100%"}}>
      <header className="loader">
        <img src={cwc} className="App-logo" alt="logo" />
        <br />
        <div className="dot-flashing"></div>
      </header>
    </div>
  );
}

export default Loader