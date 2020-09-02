import React, { Component } from "react";
import EventCalender from "../components/EventCalendar"
import "../css/ScheduleContainer.css";


class ScheduleContainer extends Component {
    render() {
        return (<div className="ScheduleContainer">
          <EventCalender schedules={this.props.schedules} showVideoPage={this.props.showVideoPage}/>
        </div>)
      }
}

export default ScheduleContainer;