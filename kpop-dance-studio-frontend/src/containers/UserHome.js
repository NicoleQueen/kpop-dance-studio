import React, { Component } from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";

import Home from "../components/Home.js";
import PricingContainer from "./PricingContainer.js";
import InstructorContainer from "./InstructorContainer.js";
import MapContainer from "./MapContainer.js";
import HistoryContainer from "./HistoryContainer.js";


class UserHome extends Component {

  renderMapPage = () => (<MapContainer/>)
  renderHistoryPage = () => (<HistoryContainer/>)
    render() {
        return (<div className="UserHome">
          <MapContainer/>
          <Switch>

<Route exact path="/" component={Home}/>
<Route path="/user" render={this.props.renderSchedulePage}/>

<Route path="/user/instructor" render={this.props.renderInstructorsPage}/>
<Route exact path="/user/pricing" component={PricingContainer}/>
<Route path="/user/route" render={this.renderMapPage}/>
<Route path="/user/history" render={this.renderHistoryPage}/>
</Switch>

        </div>)
      }
}

export default UserHome;