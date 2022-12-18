import React from "react";
import SettingsCard from "./SettingsCard";
import Top from "./Top";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { setPrevSignedIn } from "../../functions/auth";

function Index() {
  const navigate = useNavigate()
  const logout = () => signOut(auth).then(() => {
    setPrevSignedIn(false);
    navigate("/");
  }).catch((error) => {
    console.log(error);
  });
  return (
    <div className="container m-5 mt-12 ">
      <Top />
      <div>
        <SettingsCard text="Verify as Admin" />
        <SettingsCard text="Verify as an organisation" />

        <div onClick={() => logout()}>
          <SettingsCard text="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Index;
