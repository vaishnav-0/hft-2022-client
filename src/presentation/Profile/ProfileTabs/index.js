import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import coin from "../../Common/icons/coin.svg";
import Group from "../../Common/icons/Group.svg";
import user2 from "../../Common/icons/user2.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const approvedPlaceDetails = [
  {
    name: "Kovalam Beach",
    pcount: "2k",
    owner: "Najid Navas",
    approvalStatus: "Event start Approval",
  },
  {
    name: "Cusat Campus",
    pcount: "1k",
    owner: "Gokul Krishnan",
    approvalStatus: "Event Completion Approval",
  },
  {
    name: "Mec Campus",
    pcount: "1.5k",
    owner: "Vaishnav",
    approvalStatus: "Event start Approval",
  },
];
const completedPlaceDetails = [
  {
    name: "Kovalam Beach",
    coinRecieved: 40,
  },
  {
    name: "Cusat Campus",
    pcount: 60,
  },
  {
    name: "Cusat Campus",
    pcount: 100,
  },
];

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          display: "flex",
          justifyContent: "center",
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Approved" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "Column",
            marginLeft: 0.2,
            justifyContent: "center",
          }}
        >
          {approvedPlaceDetails.map((item) => (
            <Grid item xs={5} md={1}>
              <Card
                sx={{
                  minWidth: 320,
                  alignContent: "center",
                  borderRadius: 5,
                  padding: 0,
                }}
              >
                <CardContent>
                  <div className="flex justify-between ">
                    <Typography
                      sx={{ fontSize: 18, fontWeight: 600 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <div>{item.name}</div>
                    </Typography>
                    <div className="flex space-x-2">
                      <img src={Group} alt="group image" />
                      <Typography
                        sx={{ fontSize: 18, fontWeight: 600 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item.pcount}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                <CardActions className="flex flex-row justify-between  ">
                  <div className="flex  gap-2  mb-2  px-3 rounded-2xl">
                    {" "}
                    <img src={user2} alt="user2" />
                    <div className="inline">{item.owner}</div>
                  </div>
                  <Typography
                    sx={{ fontSize: 12, fontWeight: 600 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {" "}
                    <div className="ml-3 mb-4 align-right   px-5 rounded-2xl bg-[#FBA859]">
                      {" "}
                      {item.approvalStatus}
                    </div>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "Column",
            marginLeft: 0.2,
            justifyContent: "center",
          }}
        >
          {completedPlaceDetails.map((item) => (
            <Grid item xs={5} md={1}>
              <Card
                sx={{
                  minWidth: 320,
                  alignContent: "center",
                  borderRadius: 5,
                  padding: 0,
                }}
              >
                <CardContent>
                  <div className="flex justify-between ">
                    <Typography
                      sx={{ fontSize: 18, fontWeight: 600 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <div>{item.name}</div>
                    </Typography>
                    <div className="flex space-x-2">
                      <img src={Group} alt="group image" />
                      <Typography
                        sx={{ fontSize: 18, fontWeight: 600 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item.pcount}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                <CardActions className="flex flex-row justify-between  ">
                  <Typography
                    sx={{ fontSize: 12, fontWeight: 600 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {" "}
                    <div className="ml-3 mb-4 align-right  text-lg flex   px-5 rounded-2xl justify-end gap-3">
                      {item.coinRecieved} <img src={coin} alt="" /> recieved
                    </div>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
