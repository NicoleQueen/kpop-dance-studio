import React, { Component } from "react";
import BookHistory from "../components/BookHistory"
import OrderHistory from "../components/OrderHistory"


class HistoryContainer extends Component {
  
    render() {
      console.log(this.props)
        return (<div>
          <BookHistory bookingSchedule={this.props.bookingSchedule}/>
          <OrderHistory/>
        </div>)
      }
}

export default HistoryContainer;