import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
 

  render() {
    return (
      <div
        className={"NavBar"}
        style={{
          borderBottom: "1.4px solid black",
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
           
 
            <a class="navbar-brand" href="#">
            Kpop Dance Studio
          </a>
          <a class="nav-link" href="#instructor" id={"about1"}>
            Instructor
          </a>

          <a class="nav-link" href="#schedule" id={"about2"}>
            Schedule
          </a>

          <a class="nav-link" href="#pricing" id={"about3"}>
            Pricing
          </a>

          <a class="nav-link" href="#" id={"about4"}>
            Members
          </a>
        </nav>

      
      </div>
    );
  }
}
export default Navbar;