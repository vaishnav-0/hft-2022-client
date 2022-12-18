import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { auth } from "../../../firebase";
import Celebrities from "../../Common/icons/Celebrities.svg";
import Group from "../../Common/icons/Group.svg";
import "./style.css";
import { likeEvent, unlikeEvent } from "../../../functions/db";
import { useNavigate } from "react-router-dom";

function Index({ id, location, likes, userName, liked }) {
  const user = auth.currentUser;
  const [isLiked, setIsLiked] = React.useState(liked);
  const [likeCount, setLikeCount] = React.useState(likes);
  const navigate = useNavigate();
  const isLiking = React.useRef(false);
  const like = (e) => {
    e.stopPropagation();
    if (!isLiking.current) {
      isLiking.current = true;
      if (!isLiked) {
        likeEvent(id, user.uid)
          .then(() => {
            setIsLiked(true);
            setLikeCount((prev) => prev + 1);
          })
          .finally(() => {
            isLiking.current = false;
          });
      } else {
        unlikeEvent(id, user.uid)
          .then(() => {
            setIsLiked(false);
            setLikeCount((prev) => prev - 1);
          })
          .finally(() => {
            isLiking.current = false;
          });
      }
    }
  };

  React.useEffect(() => {
    setIsLiked(liked);
  }, [liked]);
  return (
    <div onClick={() => navigate("/eventDetails", { state: { id: id } })} className="w-100 content-center justify-center ">
      <div id="base_card">
        <div id="content_card">
          <div>
            <p>{location}</p>
            <img src={Celebrities} alt="celibreties" />
          </div>
          <div>
            <div className="space-x-2">
              <img src={Group} alt="another" />
              <p>{userName}</p>
            </div>
            <div>
              <img src={Group} alt="another" />
              <p>{likeCount}</p>
              <FavoriteIcon
                style={{ color: isLiked ? "red" : "white" }}
                onClick={like}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
