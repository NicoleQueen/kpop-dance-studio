import React, { Component } from "react";
import "../css/UserNav.css";

class UserNav extends Component {

 renderUser = () => {
  //  console.log(this.props.user)
  let currentUser = this.props.users.filter(
    (item) => item.id === this.props.user.id
  );
   return (
     <div className="UserNav">
       <img
           
              src={currentUser.length > 0 && currentUser[0].image}
              width="150"
              height="150"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
              id="userImg"
              
            />
            
           <a id="userName" class="nav-link" href="user/edit">
            {this.props.user.username} 
          </a>
            
          <a class="nav-link" href="/user/history" type="click" id="history">
              History
            </a>
            <a class="nav-link" href="/user/route" type="click" id="route">
              Route
            </a>

     </div>
   )
 }
  render() {
    return (
      <div
        className={"UserNav"}
        style={{
          borderBottom: "1.2px solid black",
          borderLeft: "1.2px solid black",
          paddingBottom: 8,
          marginBottom: 10,
        }}
      >
        {this.renderUser()}
      </div>
    );
  }

}

export default UserNav;