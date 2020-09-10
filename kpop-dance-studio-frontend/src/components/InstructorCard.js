import React from "react";
import "../css/InstructorCard.css";


const InstructorCard = (props) => {
    
    return (
        <div className="image-area">
		<div className="img-wrapper">
			<img src={props.instructor.image}/>
    <h2>{props.instructor.name}</h2>
			<ul>
				
				<li><a href={props.instructor.instagram} target="_blank"><i className="fab fa-instagram"></i></a></li>
				<li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
				<li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a></li>
			</ul>
		</div>
	</div>
    )
}

export default InstructorCard;