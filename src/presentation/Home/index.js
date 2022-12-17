import React from "react";
import TopButtons from "./TopButtons";
import Header1 from "./Header1";
import TopNav from "./TopNav";
import { getEvents } from "../../functions/db";
function Index() {
  const [events, setEvents] = React.useState({});

  React.useEffect(() => {
    getEvents();
  }, [])
  return (
    <div className="w-[90%] justify-center ml-5 space-y-4">
      <TopNav />
      <TopButtons />
      <Header1 />
    </div>
  );
};

export default Index;
