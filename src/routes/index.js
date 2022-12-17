import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../presentation/Home";
import Layout from "../presentation/Layout";
import Login from "../presentation/Login";
import EventDetails from "../presentation/EventDetails";
import Profile from "../presentation/Profile";

import SignUp from "../presentation/SignUp";
import Testing from "../components/testing";

export default function router() {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="testing" element={<Testing />}></Route>

          <Route path="login" element={<Login />}></Route>
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
                  <Route path="eventdetails" element={<EventDetails />}></Route>
                  <Route path="profile" element={<Profile />}></Route>
                  

          <Route path="signup" element={<SignUp />}></Route>
          <Route path="*" element={Login} />
        </Routes>
      }
    </BrowserRouter>
  );
}
