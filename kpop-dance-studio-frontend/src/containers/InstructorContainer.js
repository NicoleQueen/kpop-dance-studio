import React, { Component } from "react";
import "../App.css";
import InstructorCard from "../components/InstructorCard";
import "../css/InstructorsContainer.css"
class InstructorContainer extends Component {
  allInstructors = (props) => {
return this.props.instructors.map(item => {
    return (
        <InstructorCard instructor={item}/>
    )
})
  }
  render() {
  return (<div className="instructorsContainer">{this.allInstructors()}</div>)}
}

  export default InstructorContainer;