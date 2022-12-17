import React from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
// import {RequireAuth} from "./RequireAuth";
// import Login from '../components/Login'
// import Main from "../pages/Main";
// import P404 from "../pages/404";
// import {NotRequireAuth} from "./NotRequireAuth";

export default function () {
    return (
        <BrowserRouter>
            {
                <Routes>
                    <Route path="login" element={<div>login</div>}>
                    </Route>
                    <Route path="/" element={<div>root</div>}>
                        <Route path="" element={<></>}>
                        </Route>
                    </Route>
                    <Route path="*" element={<></>}/>
                </Routes>
            }
        </BrowserRouter>
    );
}
