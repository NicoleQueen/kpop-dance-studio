import React, { Component } from "react";

import MapContainer from "./MapContainer.js";
import UserNav from "../components/UserNav.js";



class UserContainer extends Component {
    render() {
        return (
        <div>
            <UserNav user={this.props.user} users={this.props.users}/>
           <MapContainer/> 
        </div>)
      }
}

export default UserContainer;