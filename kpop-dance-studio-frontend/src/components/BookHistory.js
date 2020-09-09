import React, { Component } from "react";
import "../css/History.css"

class BookHistory extends Component {
  // console.log(props)
  renderBookings = () => {
    let currentUserBookings = this.props.bookings.filter(
      item => item.user.id === this.props.user.id
    )

      return currentUserBookings.map(item => {
        return (
          <li className="eachList"> {item.schedule.date}, {item.schedule.time}, Instructor: {item.schedule.instructor.name}. <span>❤️</span></li>
        )
      }
    )
  } 
  render() {
  return (
    <div 
    className="history"
    style={{
      borderBottom: "1px solid gray",
      paddingBottom: 8,
      marginBottom: 10,
    }}
    >
      <h3>Booking History:</h3>
      {this.renderBookings()}
    </div>
    )
  }
}

export default BookHistory