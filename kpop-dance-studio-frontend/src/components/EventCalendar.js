import React, { Component } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction";
import "../css/EventCalendar.css";
import ReactPlayer from "react-player"

class EventCalendar extends Component {

  handleDateClick = (arg) => { 
    // console.log(arg)
    // alert(arg.dateStr)

    let currentSchedule = this.props.schedules.filter(schedule => {
      return schedule.date === arg.dateStr
    })
    // console.log(currentSchedule)
    // console.log(this.props.renderVideoPage(currentSchedule[0]))

    return this.props.showVideoPage(currentSchedule[0])
    // return <ReactPlayer
    //     url="https://www.youtube.com/watch?v=Lj-QJuHYfL4"
    //   />
  }

  allEvents = (props) => {
      return this.props.schedules.map(schedule => {
        return {title: schedule.instructor.name + schedule.time, date: schedule.date}
      })
  }
    render () {

      return (
        <FullCalendar
        // defaultView="dayGridMonth"
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={this.allEvents()}
        // events={[
        //   { title: 'Yoojung Lee: 7:00 - 8:00', date: '2020-09-01' },
        //   { title: 'event 2', date: '2020-09-02' }
        // ]}
        dateClick={this.handleDateClick}
      />
      )
    }
    
}

export default EventCalendar;
