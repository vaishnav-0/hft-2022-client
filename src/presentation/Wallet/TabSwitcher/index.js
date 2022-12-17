import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PurchaseCoupon from '../PurchaseCouponCard';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TransactionCard from "../TransactionCard/index.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const couponsList= [
  {
    CouponTitle: "50% Off",
    Amount: 200,
  },
  {
    CouponTitle: "70% Off",
    Amount: 70,
  },
  {
    CouponTitle: "300 Off",
    Amount: 500,
  },
  {
    CouponTitle: "75% Off",
    Amount: 200,
  },
  {
    CouponTitle: "Recharge",
    Amount: 250,
  },
  {
    CouponTitle: "Free Ride",
    Amount: 300,
  },
]

const purchasedCouponsList= [
  {
    CouponTitle: "300 Off",
    Amount: 500,
  },
  {
    CouponTitle: "75% Off",
    Amount: 200,
  },
  {
    CouponTitle: "Recharge",
    Amount: 250,
  }
]

const transHistoryList= [
  {
    Amount: "400",
    Date: "12/10/2022",
  },
  {
    Amount: "600",
    Date: "10/10/2021",
  },
  {
    Amount: "200",
    Date: "12/10/2022",
  },
  {
    Amount: "600",
    Date: "10/10/2021",
  },
  {
    Amount: "400",
    Date: "12/10/2022",
  },
  {
    Amount: "200",
    Date: "12/10/2022",
  }
]

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Redeen Rewards" {...a11yProps(0)} />
          <Tab label="Your Coupons" {...a11yProps(1)} />
          <Tab label="Transaction" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
        {couponsList.map(item=> <Grid item xs={6} md={2}>
              <PurchaseCoupon CouponTitle={item.CouponTitle} Amount={item.Amount} />
          </Grid>)
          
        }
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
          {purchasedCouponsList.map(item=>
          <Grid item xs={6} md={2}>
            <PurchaseCoupon CouponTitle={item.CouponTitle} Amount={item.Amount} />
          </Grid>)}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
          {transHistoryList.map(item=>

            <TransactionCard TransAmount={item.Amount} TransDate={item.Date} />)
          }
      </TabPanel>
    </Box>
  );
}