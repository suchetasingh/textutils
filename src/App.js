import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  const [myMode, setmyMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [myClr, setmyClr] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  const toggleSwitch = () => {
    if (myMode === "light") {
      setmyMode("dark");
      document.body.style.backgroundColor = "rgb(14 49 84)";
      document.body.style.color = "white";
      showAlert("success! ", "dark mode enabled");
      // document.title='TextUtils- Dark Mode'
      // setInterval(() => {
      //   document.title='TesxtUtils is amazing'
      // }, 1500);
      // setInterval(() => {
      //   document.title=' Install TesxtUtils Now!'
      // }, 2000);
    } else {
      setmyMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success! ", "light mode enabled");
      // document.title = "TextUtils- Light Mode";
    }
  };
  const greenColor = () => {
    document.body.style.backgroundColor = "green";
    setmyClr('green')
  };
  const redColor = () => {
    document.body.style.backgroundColor = "red";
    setmyClr('red')
  };
  const blackColor = () => {
    document.body.style.backgroundColor = "black";
    setmyClr('black')
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          aboutText="About Us"
          mode={myMode}
          toggleSwitch={toggleSwitch}
          clr={myClr}
          gColor={greenColor}
          rColor={redColor}
          bColor={blackColor}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" 
              element={<About />}
            />
            <Route exact path="/home" 
              element={<TextForm
                heading="Enter the text to analyse"
                mode={myMode}
                showAlert={showAlert}
                gColor={greenColor}
                clr={myClr}
                // gnClr='green'
              />}
            />
          </Routes>
        </div>
        {/* <About/> */}
      </Router>
    </>
  );
}
export default App;
