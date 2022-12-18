import { Create } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../presentation/Home";
import Layout from "../presentation/Layout";
import Login from "../presentation/Login";
import EventDetails from "../presentation/EventDetails";
import Wallet from '../presentation/Wallet'
import CreateEvent from "../presentation/CreateEvent";
import Profile from "../presentation/Profile";
import { RequireAuth } from "./RequireAuth";
import Camera from "../presentation/Camera";

import SignUp from "../presentation/SignUp";
import Testing from "../components/testing";
import { NotRequireAuth } from "./NotRequireAuth";
import Settings from "../presentation/Settings";

export default function router() {
    return (
        <BrowserRouter>
            {
                <Routes>
                    <Route path="testing" element={<Testing />}></Route>

                    <Route path="/login" element={<NotRequireAuth redirect="/" />}>
                        <Route index element={<Login />} />

                    </Route>

                    <Route path="/" element={<RequireAuth redirect="/login" />}>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                        </Route>
                        <Route path="wallet" element={<Wallet />}></Route>
                        <Route path="settings" element={<Settings />}></Route>
                        <Route path="create" element={<CreateEvent />}></Route>
                        <Route path="camera" element={<Camera />}></Route>
                        <Route path="eventdetails" element={<EventDetails />}></Route>
                        <Route path="profile" element={<Profile />}></Route>
                    </Route>



                    <Route path="signup" element={<SignUp />}></Route>


                    <Route path="*" element={Login} />
                </Routes>
            }
        </BrowserRouter>
    );
}
