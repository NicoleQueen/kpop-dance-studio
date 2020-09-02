  
import React, { Component } from "react";
import './App.css';
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import InstructorContainer from "./containers/InstructorContainer.js";
import Login from "./components/Login.js";
import PricingContainer from "./containers/PricingContainer.js";
import ScheduleContainer from "./containers/ScheduleContainer.js";

import UserContainer from "./containers/UserContainer.js";

import { Redirect } from "react-router-dom";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import ShowVideo from "./components/ShowVideo";

class App extends Component {
  state = {
    user: {
      id: null,
      username: null,
      token: null,
    },
    instructors: [],
    users: [],
    schedules: [],
    schedule: null,
    bookingSchedule: null,
  }
  componentDidMount() {
    this.fetchChannels();
    this.fetchUsers();
    this.fetchSchedules();

    if (localStorage.token) {
      fetch("http://localhost:3000/persist", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          this.handleAuthResponse(json);
        });
      // .then(json => window.location.replace('http://localhost:3000/'))
    }
  }

  handleAuthResponse = (res) => {
    // console.log(res.user);
    if (res.user) {
      // console.log(this.props);
      localStorage.token = res.token;
      this.setState(
        {
          user: {
            id: res.user.id,
            username: res.user.username,
            token: res.token,
          },
        },
        () => {
          this.props.history.push("/user");
        }
      );
    } else {
      alert(res.error);
    }
  };

  handleLogin = (e, userInfo) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((json) => {
        
        if (!json.error) {
          this.handleAuthResponse(json);
          // this.props.history.push("/user");
        } else {
          alert(json.error);
        }
      });
   
  };

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    // console.log(e, userInfo);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(this.renderLoginPage());
        if (!json.error) {
          // this.renderLoginPage();
          this.props.history.push("/login");
          // this.handleAuthResponse(json);
        } else {
          alert(json.error);
        }
      });
  };

  fetchChannels = () => {
    fetch(`http://localhost:3000/instructors`)
      .then((res) => res.json())
      .then((data) => this.setState({ instructors: data }));
  };

  fetchUsers = () => {
    fetch(`http://localhost:3000/users`)
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  };

  fetchSchedules = () => {
    fetch(`http://localhost:3000/schedules`)
      .then((res) => res.json())
      .then((data) => this.setState({ schedules: data }));
  };

  renderInstructorsPage = () => (<InstructorContainer instructors={this.state.instructors}/> )
  // handleInstructorsPage = () => (
  //   <Redirect to={'/instructor'}/>
  // )
  showVideoPage = (schedule) => {
    // console.log(schedule)
    // <Redirect to={'/user/video'}/>
    this.state.user.id ? (
      this.setState({ schedule: schedule }) &&
      this.props.history.push("/user/video")
    ) : (
      this.props.history.push("/login")
    )
    // this.setState({ schedule: schedule })
    // return <Redirect to={'/user/video'}/>
      // this.props.history.push("/user/video")
    

  }

  showPaymentPage = () => {
    this.state.user.id ? (
      // this.setState({ schedule: schedule }) &&
      this.props.history.push("/user/pay")
    ) : (
      this.props.history.push("/login")
    )
  }

  handleBooking = (s) => {
    console.log(s)
    this.setState({ bookingSchedule: s })
    // this.props.history.push("/user/history")
  }
  renderVideoPage = () => {
    return <ShowVideo schedule={this.state.schedule} handleBooking={this.handleBooking}/>
  }

  
  
  renderSchedulePage = () => (<ScheduleContainer schedules={this.state.schedules} showVideoPage={this.showVideoPage}/>)
  renderLoginPage = () => (<Login handleLogin={this.handleLogin} handleSignup={this.handleSignup}/>)
  renderUserPage = () => (<UserContainer user={this.state.user} users={this.state.users}
    instructors={this.state.instructors}
    renderInstructorsPage={this.renderInstructorsPage}
    renderSchedulePage={this.renderSchedulePage}
    showVideoPage={this.showVideoPage}
    renderVideoPage={this.renderVideoPage}
    bookingSchedule={this.state.bookingSchedule}
    />)
    renderPricingPage = () => (<PricingContainer user={this.state.user}/>)

  handleLogout = () => {
    this.setState(
      {
        user: {
          id: null,
          username: null,
          token: null,
        },
        schedule: null,
        bookingSchedule: null,
      },
      );
      localStorage.clear();
          this.props.history.push("/");
 
    
  };

  render() {
  return (
    <div className="App">
      <NavBar userId={this.state.user.id} handleLogout={this.handleLogout}/>
      <Switch>

      <Route exact path="/" component={Home}/>
      <Route path="/user" render={this.renderUserPage}/>
      <Route path="/instructor" render={this.renderInstructorsPage}/>
      <Route path="/schedule" render={this.renderSchedulePage}/>
      <Route path="/pricing" render={this.renderPricingPage}/>
      <Route path="/login" render={this.renderLoginPage}/>
      </Switch>
      {/* <ShowVideo/> */}
  
     
      <Footer/>
    </div>
  );
}
}

export default withRouter(App);
