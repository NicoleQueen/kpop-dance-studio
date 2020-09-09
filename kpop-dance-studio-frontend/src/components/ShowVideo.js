import React, { Component } from "react";
import ReactPlayer from "react-player"
import { Link } from "react-router-dom";
import "../css/ShowVideo.css";

class ShowVideo extends Component {
  
  handlebook = () => {
    console.log("test")
  }
  render () {
    // console.log(this.props.schedule !== null && this.props.schedule.id)
    console.log(this.props.schedule != null && this.props.schedule.video_url)
    return (
      <div className="video_page">
        <ReactPlayer className="video"
          url={this.props.schedule != null && this.props.schedule.video_url}
        />
        <div className="infor">
        <div className="video_infor">
        <ul>{this.props.schedule != null && this.props.schedule.date}</ul>
        <ul>{this.props.schedule != null && this.props.schedule.time}</ul>
        <ul>{this.props.schedule != null && this.props.schedule.instructor.name} <img className="image" src={this.props.schedule != null && this.props.schedule.instructor.image}/></ul>
        </div>
        <div onClick={(e) => this.props.handleBooking(e, this.props.schedule != null && this.props.schedule)}>
        {/* <div onClick={() => this.handlebook()}> */}
      
        <Link to="/user/history" className="Book" type="click">Book</Link> 
       
        </div>
        </div>
      </div>
    )
  }
}

export default ShowVideo