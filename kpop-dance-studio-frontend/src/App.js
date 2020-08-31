  
import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import InstructorContainer from "./containers/InstructorContainer.js";
import Login from "./components/Login.js";
import PricingContainer from "./containers/PricingContainer.js";
import ScheduleContainer from "./containers/ScheduleContainer.js";
// import MapContainer from "./containers/MapContainer.js";

class App extends Component {
  state = {
    user: {
      id: null,
      username: null,
      token: null,
    },
    instructors: []
  }
  componentDidMount() {
    this.fetchChannels();
  }

  fetchChannels = () => {
    fetch(`http://localhost:3000/instructors`)
      .then((res) => res.json())
      .then((data) => this.setState({ instructors: data }));
  };

  render() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      {/* <InstructorContainer instructors={this.state.instructors}/> */}
      {/* <Login/> */}
      {/* <PricingContainer/> */}
      {/* <ScheduleContainer/> */}
      {/* <MapContainer/> */}
      <Footer/>
    </div>
  );
}
}

export default App;
