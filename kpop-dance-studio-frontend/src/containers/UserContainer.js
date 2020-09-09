import React, { Component } from "react";
import UserNav from "../components/UserNav.js";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../css/UserContainer.css";
import UserHome from "./UserHome"
import { BrowserRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "left",
    color: theme.palette.text.secondary,
    height: "100%",
  },
}));

const UserContainer = (props) => {
    
        return (
        <div className="UserContainer" >
          
      <Grid item xs={10} className="grid1">
      <BrowserRouter>
      <Paper className={useStyles().paper} id="paper2">
           <UserHome instructors={props.instructors} renderInstructorsPage={props.renderInstructorsPage} 
           renderSchedulePage={props.renderSchedulePage} showVideoPage={props.showVideoPage} renderVideoPage={props.renderVideoPage}
           bookingSchedule={props.bookingSchedule} user={props.user} renderPricingPage={props.renderPricingPage} 
           handlePayment={props.handlePayment} payment={props.payment} schedules={props.schedules}
           bookings={props.bookings}
           packages={props.packages}
           user={props.user}
           schedule={props.schedule}
           addPackage_db={props.addPackage_db}
           /> 
      </Paper>
      </BrowserRouter>
      </Grid>
      <Grid item xs={2} className="grid1">
      <Paper className={useStyles().paper} id="paper1">

            <UserNav user={props.user} users={props.users}/>
      </Paper>
      </Grid>
        </div>)
   
}

export default UserContainer;