import React from "react";
import { Navigate, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { getPrevSignedIn } from "../functions/auth";
import { BallTriangle,  } from 'react-loader-spinner'
import { setPrevSignedIn } from '../functions/auth';
import { toast } from "react-toastify";
import Center from "../components/Center";

/**
 * @description Redirect user to / if the user is not logged in and opens the login modal
 * @param children 
 * @param role 
 * @returns 
 */

export const RequireAuth = ({ redirect = "/", onReject = () => { }, openLoginModal = false }) => {
  const trying = getPrevSignedIn();
  const location = useLocation()
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    return auth.onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        setPrevSignedIn(true);
      } else {
        setPrevSignedIn(false);
      }
      setUser(user)
    })
  }, []);
  if (trying && !user)
    return <Center style={{height:"100vh", width:"100%"}}>
      <BallTriangle
        height="100"
        width="100"
        radius="5"
        wrapperStyle={{height:"auto"}}
        color='green'
        ariaLabel='three-dots-loading'
      />
    </Center>
  if (user === null) {

    return <Navigate to={redirect} state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
}
