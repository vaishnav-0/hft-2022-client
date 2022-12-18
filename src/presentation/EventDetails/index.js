import React from "react";
import CardDetails from "./CardDetails";
import CardSection from "./CardSection";
import { message } from "antd";
import group2 from "../Common/icons/group2.svg";
import profile from "../Common/icons/profile.svg";
import CardText from "./CardText";
import Top from "./Top";
import { auth } from "../../firebase";
import { useLocation } from "react-router-dom";
import { contributeEvent, getEvent } from "../../functions/db";

function Index() {
  const { state } = useLocation();
  const [event, setEvent] = React.useState({});
  const [likeCount, setLikeCount] = React.useState(0);
  React.useEffect(() => {
    getEvent(state.id).then(event => {
      console.log(event)
      setLikeCount(event.like_count);
      setEvent(event);
    })
  }, [])

  const handleClick = () => {
    contributeEvent(state.id, auth.currentUser.uid, []).then(() => {
      message.success("You have successfully registered for the event");
    })
  };
  return (
    <div className="m-5 space-y-6">
      <Top />
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <img src={profile} alt="profileimage" />
          <p>{event.creatorName}</p>
        </div>
        <div className="flex space-x-2">
          <img src={group2} alt="group2" />
          <p>{likeCount}</p>
        </div>
      </div>
      <CardDetails img={event?.images?.[0] ?? ""} setLikeCount={setLikeCount} id={state.id} />
      <CardText value={event.description} />
      <button
        onClick={() => {
          handleClick();
        }}
        type="button"
        className="fixed bottom-12 w-[90%] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[2rem] text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Take part in event
      </button>
    </div>
  );
};

export default Index;
