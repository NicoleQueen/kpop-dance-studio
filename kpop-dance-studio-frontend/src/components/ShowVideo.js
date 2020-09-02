import React, { Component } from "react";
import ReactPlayer from "react-player"
import { Link } from "react-router-dom";

class ShowVideo extends Component {
  handlebook = () => {
    console.log("test")
  }
  render () {
    // console.log(this.props.schedule !== null && this.props.schedule.id)

    return (
      <div>
        <ReactPlayer
          url={this.props.schedule !== null && this.props.schedule.video_url}
        />
        <div onClick={() => this.props.handleBooking(this.props.schedule !== null && this.props.schedule)}>
        {/* <div onClick={() => this.handlebook()}> */}
        <Link to="/history" class="Book" type="click">Book</Link> 
        </div>
      </div>
    )
  }
}

export default ShowVideo