import * as React from "react";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Basic from "./basic";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import {
  List,
  ListItemText,
  ListItem,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { ListItemIcon, Link } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TodayIcon from "@mui/icons-material/Today";
import { red } from "@mui/material/colors";
// import { textAlign } from "@mui/system";
// import IconButton from "@mui/material/IconButton";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// import {Manage} from './icon'
// import { Card } from '@mui/material';
// import BigCalendar from 'react-big-calendar-like-google';
// import moment from 'moment';
// import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
// import myEventsList from "./events"
// const myEventsList= [
//     {
//         title: 'Big meeting',
//         allDay: true,
//         start: moment('20/08/2021'),
//         end: moment(22/0)
//     }
// ]

export default function SimplePaper() {
  const quickActions = [
    {
      text: (
        <Typography
          sx={{ fontSize: "12px" }}
        >
          Search anything
        </Typography>
      ),
      icon: <SearchIcon sx={{width:"15px", height:"15px"}} />,
    },
    {
      text: (
        <Typography
          sx={{ fontSize: "12px" }}
        >
          Add a new Patient
        </Typography>
      ),
      icon: <AddIcon sx={{width:"15px", height:"15px"}} />,
    },
  ];

  const manage = [
    {
      text: (
        <Typography
          sx={{  fontSize: "12px" }}
        >
          Calender
        </Typography>
      ),
      icon: <TodayIcon sx={{width:"15px", height:"15px"}} />,
    },
    {
      text: (
        <Typography
          sx={{fontSize: "12px" }}
        >
          Manage Patient
        </Typography>
      ),
      icon: <ManageAccountsIcon sx={{width:"15px", height:"15px"}} />,
    },
    {
      text: (
        <Typography
          sx={{ fontSize: "12px" }}
        >
          Settings
        </Typography>
      ),
      icon: <SettingsIcon sx={{width:"15px", height:"15px"}}/>,
    },
  ];
  // BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
  const SubHeader = () => {
    return (
      <div>
        <Typography>Marvin Tunji-Ola</Typography>
        <Link href="#" underline="none">
          View Profile
        </Link>
      </div>
    );
  };

  return (
    
    <div>
      <Grid
        container
        style={{
          backgroundColor: "#FFE0D9",
        }}
      >
        <Grid item xs={2}>
          {" "}
          <Paper
            style={{
              backgroundColor: "#FFE0D9",
              height: "100%",
              fontSize: "12px",
            }}
          >
            <Grid
              container
              sx={{
                height: "100vh",
                flexDirection: "column",
                justifyContent: "space-around",
                fontSize: "12px",
              }}
            >
              <Grid item>
                <Typography
                  sx={{
                    textAlign: "center",
                    paddingRight: "100px",
                    fontSize: "12px",
                  }}
                >
                  ankora
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  sx={{
                    paddingRight: "130px",
                    fontSize: "12px",
                  }}
                >
                  Quick Actions
                </Typography>
                <List style={{ color: "#4F4F4F", textAlign: "center" }}>
                  {quickActions.map((item) => (
                    <ListItem key={item.text}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item>
                <List style={{ color: "#4F4F4F", textAlign: "center"  }}>
                  <Typography
                    sx={{
                      paddingRight: "160px",
                      fontSize: "12px",
                    }}
                  >
                    Manage
                  </Typography>
                  {manage.map((item) => (
                    <ListItem key={item.text}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.text}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title="Acme Clinic, Inc."
                  subheader={<SubHeader />}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          {" "}
          <Card
            style={{
              backgroundColor: "#FFF",
              margin: "auto",
              height: "100%"
            }}
          >
            <Basic />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
