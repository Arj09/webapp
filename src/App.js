import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./component/Home/Home";
import { Login } from "./component/Login/Login";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
  )
};

export default App;