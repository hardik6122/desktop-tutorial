import "./App.css";
import About from "./componats/About";
import Navbar1 from "./componats/Navbar1";
import TextForm from "./componats/TextForm";
import Alert from "./componats/alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMod] = useState("light");
  const [dark, setdark] = useState("Dark");
  const [color, setcolo] = useState("black");
  

  const green = () => {
    setcolo("rgb(3 50 0)");
  };
  const red = () => {
    setcolo("rgb(50 0 0)");
  };
  const blue = () => {
    setcolo("rgb(5 0 50)");
  };
  const black = () => {
    setcolo("black");
  };
  if(mode==='dark'){
  document.body.style.backgroundColor = color;}
  const dmode = () => {
    if (mode === "light") {
      setMod("dark");
      setdark("light");
      showAlert("Dark mode has been enable", "success");
        document.title = 'My first p - Darkmode'
      // setInterval(()=>{
      // },500)
      // setInterval(()=>{
      //   document.title = 'install text'
      // },1000)
    } else {
      setMod("light");
      setdark("Dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = 'My first p - Lightmode'
    }
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
  <>
   <Router>
      <Navbar1 title="Kavya" aboutText="About us" mode={mode} dmode={dmode} dark={dark} green={green} black={black} blue={blue} red={red}/>
       <Alert alert1={alert} />
      <div className="container">
          <Routes>
            <Route exact path="/" element = {<TextForm heading="Enter Text To Analyser" mode={mode} showalert={showAlert}  color1={color}/>}/>
            <Route exact path="/about"  element = {<About mode={mode} color1={color}/>}/> 
            {/* /user --componant
            /user/home --componant */}
          </Routes>
        </div>
        </Router>
      
    </>
  );
}

export default App;
