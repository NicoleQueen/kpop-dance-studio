import React, { Component } from "react";
import BookHistory from "../components/BookHistory"
import OrderHistory from "../components/OrderHistory"


class HistoryContainer extends Component {
  
    render() {
      // console.log(this.props)
        return (<div>
          <BookHistory 
            bookingSchedule={this.props.bookingSchedule} 
            bookings={this.props.bookings}
            user={this.props.user}/>
          <OrderHistory 
            packages={this.props.packages} 
            user={this.props.user}/>
        </div>)
      }
}

export default HistoryContainer;