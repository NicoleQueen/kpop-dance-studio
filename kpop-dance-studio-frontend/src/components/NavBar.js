import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {


  render() {
    return (
      <div
        className={"NavBar"}
        style={{
          borderBottom: "1.2px solid black",
          paddingBottom: 8,
          marginBottom: 10,
        }}
      >
        <nav class="navbar navbar-light bg-light">
          {/* <a class="navbar-brand" href="#"> */}

          {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfy-5NfqPnU5WIm4OERok12seY_Y-hYsRY5Q&usqp=CAU"
              width="45"
              height="45"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            /> */}
          <section className="section">
            <div className="db-box">
              <div className="db rotate">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfy-5NfqPnU5WIm4OERok12seY_Y-hYsRY5Q&usqp=CAU"
                  width="45"
                  height="45"
                  class="db rotate"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* {this.props.userId ? (
            <a class="navbar-brand" href="/" id='kpop'>
            Kpop Dance Studio
          </a>
          ) : ( */}

          <a class="navbar-brand" href="/" id='kpop'>
            Kpop Dance Studio
          </a>
          {/* )}  */}
          {this.props.userId ? (
            <a class="nav-link" href="user/instructor" id={"about1"} >
            Instructor
          </a>
          ) : (

          <a class="nav-link" href="instructor" id={"about1"} >
            Instructor
          </a>
          )}
          {this.props.userId ? (
            <a class="nav-link" href="user" id={"about2"} >
            Schedule
          </a>
          ) : (

          <a class="nav-link" href="schedule" id={"about2"} >
            Schedule
          </a>
          )}
          {this.props.userId ? (
            <a class="nav-link" href="user/pricing" id={"about3"}>
            Pricing
          </a>
          ) : (

          <a class="nav-link" href="pricing" id={"about3"}>
            Pricing
          </a>
          )}
          {this.props.userId ? (
            <div onClick={() => this.props.handleLogout()}>
              <a class="nav-link" href="/" id={"about4"} type="click" >
                Logout
            </a>
            </div>
          ) : (

              <a class="nav-link" href="login" id={"about4"}>
                Members
              </a>
            )}
        </nav>


      </div>
    );
  }
}
export default Navbar;