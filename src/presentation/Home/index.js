import React from "react";
import { auth } from "../../firebase";
import { getEvents, getLiked } from "../../functions/db";
import Header1 from "./Header1";
import TopButtons from "./TopButtons";
import TopNav from "./TopNav";
function Index() {
  const [events, setEvents] = React.useState({});
  const [liked, setLiked] = React.useState({});

  const user = auth.currentUser;

  React.useEffect(() => {

    getEvents().then(events => {
      setEvents(events)
      getLiked(Object.keys(events), user.uid).then(l => {
        console.log("kikekek", l)
        setLiked(l);
      })
      console.log(events)
    });
  }, []);
  return (
    <div className="w-[90%] justify-center ml-5 space-y-4">
      <TopNav />
      <TopButtons />

      {Object.entries(events).map(([eventKey, eventData], i) => {
        return (
          <Header1
            key={i}
            id={eventKey}
            location={eventData.location}
            userName={eventData.creatorName}
            likes={eventData.like_count ?? 0}
            liked={!!liked[eventKey]}
          />
        );
      })}
    </div>
  );
}

export default Index;
