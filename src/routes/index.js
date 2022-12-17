import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../presentation/Layout";
import Home from "../presentation/Home";
import Login from "../presentation/Login";
import SignUp from "../presentation/SignUp";

export default function router() {
  return (
    <BrowserRouter>
      {
        <Routes>
                  <Route path="login" element={<Login />}></Route>
                  
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />}></Route>
            
          </Route>
          
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="*" element={Login} />
        </Routes>
      }
    </BrowserRouter>
  );
}