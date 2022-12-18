import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import map1 from "../../Common/images/maps/map1.jpg";
import { auth } from "../../../firebase";
import { isLiked as isLikedFn, likeEvent, unlikeEvent } from "../../../functions/db";

function Index({ id, img = "", setLikeCount }) {
  const user = auth.currentUser;
  const [isLiked, setIsLiked] = React.useState(false);
  const isLiking = React.useRef(false);
  React.useEffect(() => {
    isLiking.current = true;
    isLikedFn(id, user.uid).then((like) => {
      setIsLiked(like);
      isLiking.current = false;
    })
  }, [])
  const like = (e) => {
    e.stopPropagation();
    if (!isLiking.current) {
      isLiking.current = true;
      if (!isLiked) {
        likeEvent(id, user.uid).then(() => {
          setIsLiked(true)
          setLikeCount(prev => prev + 1);
        }).finally(() => {
          isLiking.current = false;

        });
      } else {
        unlikeEvent(id, user.uid).then(() => {
          setIsLiked(false);
          setLikeCount(prev => prev - 1);

        }).finally(() => {
          isLiking.current = false;

        });
      }
    }

  }
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <div>
      <div className="flex w-full p-0 m-0 justify-between">
        <Card className="w-full p-0" sx={{ minWidth: 280, maxWidth: 280 }}>
          <CardContent>
            <img src={img} alt="" />
          </CardContent>
        </Card>
        <div className="flex flex-col space-y-11">
          <Avatar>
            <LocationOnIcon />
          </Avatar>
          <Avatar>
            <FavoriteBorderIcon onClick={like} style={{ color: isLiked ? "red" : "white" }} />
          </Avatar>
          <Avatar><ShareIcon /></Avatar>
        </div>
      </div>
    </div>
  );
};

export default Index;
