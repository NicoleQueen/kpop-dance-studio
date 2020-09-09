import React, { Component } from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";

import Home from "../components/Home.js";
import PricingContainer from "./PricingContainer.js";
import InstructorContainer from "./InstructorContainer.js";
import MapContainer from "./MapContainer.js";
import HistoryContainer from "./HistoryContainer.js";
import ShowVideo from "../components/ShowVideo.js";
import PaymentForm from "../components/PaymentForm.js";
import MapHome from "./MapHome"
import OrderSuccess from "../components/OrderSuccess"


// const renderVideoPage = (props) => {
//   // this.setState({ schedule: this.state.schedules[0] })
//   // console.log(this.state.schedules[0])
//   // if (this.state.schedule) {
//   console.log('a')
//   //   console.log(this.state.schedule)
//   // } else {
//   //   console.log("a")
//   // }
//   return <ShowVideo {...props} schedule={this.props.schedule} />
// }
class UserHome extends Component {

  renderMapPage = () => (<MapContainer/>)
  renderHistoryPage = () => (<HistoryContainer bookings={this.props.bookings}
    packages={this.props.packages} bookingSchedule={this.props.bookingSchedule}
    user={this.props.user}/>)
  // renderVideoPage = (schedule) => (<ShowVideo schedule={schedule}/>)

  renderPaymentPage =(props) => (<PaymentForm 
      {...props} 
      payment={this.props.payment} 
      handlePayment={this.props.handlePayment}
      user={this.props.user}
      addPackage_db={this.props.addPackage_db}
      />)
  // renderVideoPage = (props) => {
  //   // this.setState({ schedule: this.state.schedules[0] })
  //   // console.log(this.state.schedules[0])
  //   // if (this.state.schedule) {
  //   console.log('a')
  //   //   console.log(this.state.schedule)
  //   // } else {
  //   //   console.log("a")
  //   // }
  //   return <ShowVideo {...props} schedule={this.props.schedule} />
  // }

  render() {
    console.log(this.props)
        return (<div className="UserHome">
          {/* <MapContainer/> */}
          {/* <PaymentForm/> */}
          {/* <MapHome/> */}
          {/* <OrderSuccess/> */}
         
        <Switch>

            <Route exact path="/" component={Home}/>
            <Route exact path="/user" render={this.props.renderSchedulePage}/>
            <Route exact path="/user/video" render={(props) => this.props.renderVideoPage(props)}/>
            <Route exact path="/user/instructor" render={() => this.props.renderInstructorsPage()}/>
            <Route exact path="/user/pricing" render={this.props.renderPricingPage}/>
            <Route exact path="/user/route" render={this.renderMapPage}/>
            <Route exact path="/user/history" render={this.renderHistoryPage}/>
            <Route path="/user/success" component={OrderSuccess}/>
            <Route path="/user/paymentform" render={(props) => this.renderPaymentPage(props) }/>

        </Switch> 

        </div>)
      }
}

export default withRouter(UserHome);