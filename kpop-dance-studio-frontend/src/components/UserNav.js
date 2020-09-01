import React, { Component } from "react";

class UserNav extends Component {

 renderUser = () => {
  //  console.log(this.props.user)
  let currentUser = this.props.users.filter(
    (item) => item.id === this.props.user.id
  );
   return (
     <div>
       <img
           
              src={currentUser.length > 0 && currentUser[0].image}
              width="39"
              height="39"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
           <a>
            {this.props.user.username}
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