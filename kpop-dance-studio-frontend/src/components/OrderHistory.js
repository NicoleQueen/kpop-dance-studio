import React, { Component } from "react";
import "../css/History.css"
import { render } from "react-dom";

class OrderHistory extends Component {
  renderOrders = () => {
    let currentUserOrders = this.props.packages.filter(
      item => item.user.id === this.props.user.id
    )

    return currentUserOrders.map(item => {
      if (item.kind === 1) {
          return (<li className="eachList">Ordered 1 class, $49.99! Thank you for purchasing! <span>❤️</span></li>)
        } else if (item.kind === 3) {
          return (<li className="eachList">Ordered 3 classes, $129.99! Thank you for purchasing! <span>❤️</span></li>)
        } else if (item.kind === 30) {
          return (<li className="eachList">Ordered 1 month unlimited class, $399.99! Thank you for purchasing! <span>❤️</span></li>)
        } 
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
       <h3>Order History:</h3>
         {this.renderOrders()}
         {/* {props.bookingSchedule.date} {props.bookingSchedule.time} {props.bookingSchedule.instructor.name} */}
     </div>
   )
  }
}

export default OrderHistory