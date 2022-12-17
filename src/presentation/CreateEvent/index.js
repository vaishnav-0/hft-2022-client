import React from "react";
import LocationButton from "./LocationButton";
import ImageSection from "./ImageSection";
import TextBox from "./TextBox";
import Top from "./Top";
import { useLocation, useNavigate } from "react-router-dom";
import { createEvent } from "../../functions/db";
import { auth } from "../../firebase";
function Index() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = auth.currentUser;
  const locationName = (state?.location?.address?.neighbourhood ?? "") + " " + (state?.location?.address.suburb ?? state?.location?.address.village ?? "")
  const create = () => {
    createEvent(user.uid, user.displayName, locationName, [state.img], desc, state.location.coords.latitude, state.location.coords.longitude).then(() => {
      navigate("/");
    })
  }
  const [desc, setDesc] = React.useState("");
  return (
    <div className="space-y-5 " >
      <Top />
      <LocationButton location={locationName} />
      <ImageSection src={state?.img} />
      <TextBox onChange={setDesc} value={desc} />
      <button
        type="button"
        onClick={create}
        className="fixed bottom-12 w-[90%] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[2rem] text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Create event.
      </button>
    </div>
  );
};

export default Index;
