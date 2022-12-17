import React from "react";
import {Navigate, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {auth} from "../firebase";
import {setPrevSignedIn} from "../functions/auth";

/**
 * @description
 * @returns
 */

export const NotRequireAuth = ({redirect = "/"}) => {
    let user = auth.currentUser;
    let location = useLocation();
    const navigate = useNavigate();
    React.useEffect(() => {
        return  auth.onAuthStateChanged(user => {
            if (user) {
                navigate(redirect);
            }
        })
    }, []);
    if (user === null) {
        return <><Outlet/></>
    } else {
        return <Navigate to={redirect} state={{from: location, openLoginModel: true}} replace/>;
    }
}
