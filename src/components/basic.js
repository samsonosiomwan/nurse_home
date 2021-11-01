import React, { useState } from "react";
// import BigCalendar from 'react-big-calendar';
import events from "./events";
import moment from "moment";
import BigCalendar from "react-big-calendar-like-google";
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";
// import AddEventPicker from "./addEvent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import { Typography} from "@mui/material";
import AddEventModal from "./addEventModal";
// // date-fns
// import DateAdapter from '@mui/lab/AdapterDateFns';
// or for Day.js
// import DateAdapter from '@mui/lab/AdapterDayjs';
// or for Luxon
// import DateAdapter from '@mui/lab/AdapterLuxon';
// or for Moment.js
// import DateAdapter from '@mui/lab/AdapterMoment';

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Basic = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    desc: "",
  });
  const [allEvents, setAllEvents] = useState(events);
  // const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };
  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };
  const AddEvent = () => {
    return (
      <div>
        {/* <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add title"
          style={{ width: "50%",height:"46px",marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      </div>  */}
     
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "18ch"},
          }}
          noValidate
          autoComplete="off"
        >
          <div>
          <Stack spacing={3}>
            <TextField
              required
              id="filled-required"
              label="Add event"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              // defaultValue="Hello World"
              variant="filled"
            />
            </Stack>
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <Grid >
              <Typography>From</Typography>
                {/* <Grid item > */}
                  {/* <DesktopDatePicker
                    // placeholder="Start Date"
                    label="Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={newEvent.start}
                    sx={{width:"190px"}}
                    onChange={(start) => setNewEvent(...newEvent, start)}
                    // onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                  <TextField
                    id="date"
                    label="Start Date"
                    type="date"
                    defaultValue="2021-08-01"
                    onChange={(start) => setNewEvent(...newEvent, start)}
                    // sx={{ width: "100px",height:"46px", }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                {/* </Grid> */}
                {/* <Grid item > */}
                  <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    sx={{ width: '150px' }}
                  />
                {/* </Grid> */}
              </Grid>
             
              <Grid>
              {/* <Grid item xs={6}>  */}
                
                {/* </Grid> */}
                {/* <Grid item > */}
                <Typography>To</Typography>
                  <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    defaultValue="2021-08-01"
                    onChange={(start) => setNewEvent(...newEvent, start)}
                    sx={{ width: "100px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    sx={{ width: "100px"}}
                  />
               
                </Grid>
                
              {/* </Grid> */}
              <Grid>
                  <Typography>Attach Patient</Typography>
              <input
                    id="attach"
                    placeholder="Attach Patient"
                    type="text"
                    // defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    sx={{ width: "100px"}}
                  />
               
                </Grid>
            </Stack>
          </LocalizationProvider>
          <Button variant="outlined" onClick={handleAddEvent}>
            Add Eveent
          </Button>
        </Box>
      </div>
    );
  };
  return (
    <div>
      <BigCalendar
        selectable
        events={allEvents}
        defaultView="day"
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2021, 10, 28)}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={(slotInfo) =>
          alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`
          )
        }
        style={{
          height: "100vh",
          margin: "50px",
        }}
      />
      <AddEventModal addEvent={<AddEvent />} />
    </div>
  );
};

export default Basic;
