import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error404";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
