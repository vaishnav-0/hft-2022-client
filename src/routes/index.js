import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../presentation/Home";
import Layout from "../presentation/Layout";
import Login from "../presentation/Login";
import EventDetails from "../presentation/EventDetails";
import Wallet from '../presentation/Wallet'
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
          <Route path="eventdetails" element={<EventDetails />}></Route>

          <Route path="signup" element={<SignUp />}></Route>
          <Route path="*" element={Login} />
          <Route path="wallet" element={<Wallet/>}></Route>
        </Routes>
      }
    </BrowserRouter>
  );
}
