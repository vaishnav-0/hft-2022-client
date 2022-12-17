import { Create } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetails from "../presentation/EventDetails";
import Home from "../presentation/Home";
import Layout from "../presentation/Layout";
import Login from "../presentation/Login";
import CreateEvent from "../presentation/CreateEvent";
import Profile from "../presentation/Profile";

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
          <Route path="profile" element={<Profile />}></Route>

          <Route path="signup" element={<SignUp />}></Route>
          <Route path="create" element={<CreateEvent />}></Route>

          <Route path="*" element={Login} />
        </Routes>
      }
    </BrowserRouter>
  );
}
