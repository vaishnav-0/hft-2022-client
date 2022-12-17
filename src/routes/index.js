import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
// import {RequireAuth} from "./RequireAuth";
import Login from '../components/Login'
import { RequireAuth } from "./RequireAuth";
import Testing from '../components/testing'
import { createEvent } from "../functions/db";
// import Main from "../pages/Main";
// import P404 from "../pages/404";
// import {NotRequireAuth} from "./NotRequireAuth";

export default function () {
    return (
        <BrowserRouter>
            {
                <Routes>
                    <Route path="login" element={<Login />}>
                    </Route>
                    <Route path="/" element={<RequireAuth redirect="/login" />}>
                        <Route path="" element={<Testing />}>
                        </Route>
                    </Route>
                    <Route path="*" element={<></>} />
                </Routes>
            }
        </BrowserRouter>
    );
}
