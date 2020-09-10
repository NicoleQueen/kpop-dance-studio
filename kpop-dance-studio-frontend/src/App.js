  
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
    bookings: [],
    packages: [],
    schedule: null,
    // bookingSchedule: null,
    payment: null,
    times: null,
    counts: 0, // store how many class a user can book.
    months: 0, // store how many months a user can book.
    click: false,
  }
  componentDidMount() {
    this.fetchInstructors();
    this.fetchUsers();
    this.fetchSchedules();
    this.fetchBookings();
    this.fetchPackages();
    // console.log('In commponent did mount')
;
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
      // console.log(this.props, 'in handleAuth');
      localStorage.token = res.token;
      this.setState(
        {
          user: {
            id: res.user.id,
            username: res.user.username,
            token: res.token,
          },
        },
        // () => {
        //   this.props.history.push("/user");
        // }
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
          this.props.history.push("/user");
        } else {
          alert(json.error);
        }
      });
   
  };

  handleSignup = (e, userInfo) => {
    console.log(userInfo)
    e.preventDefault();
    console.log(e, userInfo);
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
          alert("Succeed signup!");
          
          // this.handleAuthResponse(json);
        } else {
          alert(json.error);
        }
      })
      .then(e.target.reset())
      .then(userInfo.checked = "signin", userInfo.username = "", userInfo.password = "", userInfo.email = "") 
  };

  fetchInstructors = () => {
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

  fetchBookings = () => {
    fetch(`http://localhost:3000/bookings`)
      .then((res) => res.json())
      .then((data) => this.setState({ bookings: data }));
  };

  fetchPackages = () => {
    fetch(`http://localhost:3000/packages`)
      .then((res) => res.json())
      .then((data) => this.setState({ packages: data }));
  };

  renderInstructorsPage = () => (<InstructorContainer instructors={this.state.instructors}/> )
  // handleInstructorsPage = () => (
  //   <Redirect to={'/instructor'}/>
  // )
  showVideoPage = (schedule) => {
    // console.log(schedule)
    // <Redirect to={'/user/video'}/>
    // if (this.state.user.id) {
    //   this.setState({ schedule: schedule, click: true }) 
    //   this.props.history.push("/user/video")
    //   if(this.state.click) {
    //     return this.renderVideoPage()
    //   }
    //   return <Redirect to={'/user/video'}/>
    // } else {
    //   this.props.history.push("/login")
    // }
    
    // console.log(this.props.history)
    this.setState({ schedule: schedule})
    
    this.state.user.id ? (
      
      this.props.history.push("/user/video")
    ) : (
      this.props.history.push("/login")
    )
    // this.setState({ schedule: schedule })
    // return <Redirect to={'/user/video'}/>
      // this.props.history.push("/user/video")
    
      // console.log(this.state.schedule)
  }

  renderVideoPage = () => {
    // this.setState({ schedule: this.state.schedules[0] })
    // console.log(this.state.schedules[0])
    // if (this.state.schedule) {
    // console.log('a')
    return <ShowVideo schedule={this.state.schedule} handleBooking={this.handleBooking}/>
    //   console.log(this.state.schedule)
    // } else {
    //   console.log("a")
    // }
  }

  showPaymentPage = () => {
    this.state.user.id ? (
      // this.setState({ schedule: schedule }) &&
      this.props.history.push("/user/paymentform")
    ) : (
      this.props.history.push("/login")
    )
  }

  handleBooking = (e, s) => {
    e.preventDefault()
    let data = {user_id: this.state.user.id, schedule_id: s.id}
  
    fetch(`http://localhost:3000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.props.token}`,
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        bookings: [...this.state.bookings, json]
      });
      this.fetchUsers()
    })
  }

  handlePayment = (n, times) => {
    // console.log(n)
      this.setState(
        {payment: n,
        times: times}
      )
      this.props.history.push("/user/paymentform");
  }

  addPackage_db = (p) => {
    // e.preventDefault();
    let data = {}
    if (p === 49.99) {
      data = {kind: 1, price: p, user_id: this.state.user.id}
    } else if (p === 129.99) {
      data = {kind: 3, price: p, user_id: this.state.user.id}
    } else if (p === 399.99) {
      data = {kind: 30, price: p, user_id: this.state.user.id}
    }
    fetch(`http://localhost:3000/packages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.props.token}`,
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        packagess: [...this.state.packages, json]
      });
      this.fetchUsers()
    })
  }

  handleUpdateProfile = (e, userInfo) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        user: 
        {
          username: userInfo.username,
        }
      });
      this.fetchUsers()
      this.props.history.push("/user")
    })
  }

 
  renderSchedulePage = () => (<ScheduleContainer schedules={this.state.schedules} showVideoPage={this.showVideoPage}/>)
  renderLoginPage = () => (<Login handleLogin={this.handleLogin} handleSignup={this.handleSignup}/>)
  renderUserPage = (props) => (<UserContainer {...props} user={this.state.user} users={this.state.users}
    instructors={this.state.instructors}
    renderInstructorsPage={this.renderInstructorsPage}
    renderSchedulePage={this.renderSchedulePage}
    showVideoPage={this.showVideoPage}
    renderVideoPage={this.renderVideoPage}
    bookingSchedule={this.state.bookingSchedule}
    renderPricingPage={this.renderPricingPage}
    payment={this.state.payment}
    schedules={this.state.schedules}
    bookings={this.state.bookings}
    packages={this.state.packages}
    schedule={this.state.schedule}
    handlePayment={this.handlePayment}
    addPackage_db={this.addPackage_db}
    handleUpdateProfile={this.handleUpdateProfile}
    />)
    renderPricingPage = () => (<PricingContainer user={this.state.user} handlePayment={this.handlePayment}/>)

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
        payment: null,
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
      <Route path="/user/video" render={(props) => this.renderVideoPage(props)}/>
      <Route path="/user" render={(props) => this.renderUserPage(props)}/>
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
