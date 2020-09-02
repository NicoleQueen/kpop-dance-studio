import React, { Component } from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";

import Home from "../components/Home.js";
import PricingContainer from "./PricingContainer.js";
import InstructorContainer from "./InstructorContainer.js";
import MapContainer from "./MapContainer.js";
import HistoryContainer from "./HistoryContainer.js";
import ShowVideo from "../components/ShowVideo.js";
import PaymentForm from "../components/PaymentForm.js";


class UserHome extends Component {

  renderMapPage = () => (<MapContainer/>)
  renderHistoryPage = () => (<HistoryContainer bookingSchedule={this.props.bookingSchedule}/>)
  // renderVideoPage = (schedule) => (<ShowVideo schedule={schedule}/>)

  renderPaymentPage =() => (<PaymentForm/>)
    render() {
        return (<div className="UserHome">
          {/* <MapContainer/> */}
          
          <Switch>

<Route exact path="/" component={Home}/>
          <Route exact path="/user" render={this.props.renderSchedulePage}/>

          
<Route path="/user/instructor" render={this.props.renderInstructorsPage}/>
<Route path="/user/pricing" component={PricingContainer}/>
<Route path="/user/route" render={this.renderMapPage}/>
<Route path="/user/history" render={this.renderHistoryPage}/>
<Route path="/user/video" render={this.props.renderVideoPage}/>
<Route path="/user/pay" render={this.renderPaymentPage}/>


</Switch>

        </div>)
      }
}

export default withRouter(UserHome);