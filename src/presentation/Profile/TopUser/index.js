import Button from "@mui/material/Button";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../Common/icons/avatar.svg";
import coin from "../../Common/icons/coin.svg";
import Group from "../../Common/icons/Group.svg";
import settings from "../../Common/icons/settings.svg";
import wallet from "../../Common/icons/wallet.svg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { auth } from "../../../firebase";
function Index() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  return (
    <div>
      <div className="m-10 flex flex-row justify-center">
        <Link to="/wallet">
          <img
            className="w-25 h-20 rounded-full"
            src={wallet}
            alt="Rounded avatar"
          />
        </Link>
        <img
          className="w-20 h-15 rounded-full"
          src={avatar}
          alt="Rounded avatar"
        />
        <img
          className="w-25 h-20 rounded-full"
          src={settings}
          onClick={()=>{navigate("/settings")}}
          alt="Rounded avatar"
        />
      </div>
      <div className="flex flex-row justify-center">
        <p className="font-poppins font-bold text-[1.5rem]">{user.displayName}</p>
      </div>

      <div className="mt-5 flex flex-row justify-center">
        <Button
          style={{ borderRadius: 50 }}
          variant="outlined"
          endIcon={<img src={coin} alt="coin" />}
        >
          <div className="font-bold text-[#0A0C2B]">Upcoming Rewards : 400</div>
        </Button>
      </div>
      <div className="mt-5 flex flex-row justify-center">
        {/* card area starts here  */}
        <Card sx={{ minWidth: 275, borderRadius: 5 }}>
          <CardContent>
            <div className="flex justify-between ">
              <Typography
                sx={{ fontSize: 18, fontWeight: 600 }}
                color="text.secondary"
                gutterBottom
              >
                Kovalam Beach
              </Typography>
              <div></div>

              <img src={Group} alt="" />
              <Typography
                sx={{ fontSize: 18, fontWeight: 600 }}
                color="text.secondary"
                gutterBottom
              >
                2k
              </Typography>
            </div>
          </CardContent>
          <CardActions className="flex justify-between">
            <div className="ml-3 mb-4  px-5 rounded-2xl bg-[#FBA859]">
              {" "}
              Pending
            </div>
            <Typography
              sx={{ fontSize: 18, fontWeight: 600, marginBottom: 2 }}
              color="text.secondary"
              gutterBottom
            >
              1/10 Aprroved
            </Typography>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Index;
