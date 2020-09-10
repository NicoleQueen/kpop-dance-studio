import React from "react";
// import "../css/EditUserForm.css"
import "../css/Login.css";

class EditUserForm extends React.Component {
  // currentUserInfor = () => {
  //   return this.props.users.filter(
  //     item => item.id === this.props.user.id
  //   )
  // }

  state = {
    username: "",
    password: "",
    email: "",
    image: "",
};

componentDidUpdate() {
  console.log("componentDidMount")
  if (this.props.currentUserInfor && this.state.username === "") {

    this.setState(
      {
        username: this.props.currentUserInfor.username,
        password: "",
        email: this.props.currentUserInfor.email,
        image: this.props.currentUserInfor.image,
    }
    )
  }
}

handleChange = (e) => {
  let { name, value } = e.target;
  console.log({ name, value });
  this.setState({
      [name]: value,
  });
};

  render() {
    // console.log(this.currentUserInfor().length > 0 && this.currentUserInfor()[0])
    // console.log(this.props.currentUserInfor.username)
    console.log(this.state)
    // this.updateState()
    return (
        <div>
            <div class="login-wrap">
                <div class="login-html">
                    
                    <input id="tab-2" type="radio" name="tab" class="sign-up"  checked/><label for="tab-2" class="tab">Edit Profile</label>
                    <div class="login-form">
                        
                        <div class="sign-up-htm">
                        <form onSubmit={(e) => this.props.handleUpdateProfile(e, this.state)}>
                            <div class="group">
                                <label for="user" class="label">Username</label>
                                <input id="user" type="text" class="input" name="username"
                                value={this.state.username}
                                onChange={this.handleChange}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Password</label>
                                <input id="pass" type="password" class="input" name="password" data-type="password" 
                                    value={this.state.password}
                                    onChange={this.handleChange}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Profile image</label>
                                <input id="pass" type="text" class="input" name="image" data-type="text" 
                                value={this.state.image}
                                onChange={this.handleChange}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Email Address</label>
                                <input id="pass" type="text" class="input" 
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}/>
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Update Profile" />
                            </div>
                            </form>
                            <div class="hr"></div>
                            
                            </div>     
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default EditUserForm;

// EditUserForm.defaultProps = {
//   currentUserInfor: {
//     username: "",
   
//         email: "",
//         image: "",
//   }
//   // user.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-0-B_CFetcJsdmRfy3jn3f0v089F7x72s1Q&usqp=CAU'
//   // users.map(item => item.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-0-B_CFetcJsdmRfy3jn3f0v089F7x72s1Q&usqp=CAU')
// }