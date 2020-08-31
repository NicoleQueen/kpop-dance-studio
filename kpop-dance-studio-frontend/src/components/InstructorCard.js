import React from "react";
import "../css/InstructorCard.css";

const InstructorCard = (props) => {
    
    return (
        <div class="image-area">
		<div class="img-wrapper">
			<img src={props.instructor.image}/>
    <h2>{props.instructor.name}</h2>
			<ul>
				
				<li><a href="https://www.instagram.com/atulkprajapati2000/"><i class="fab fa-instagram"></i></a></li>
				<li><a href="https://twitter.com/atuljustano"><i class="fab fa-twitter"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw"><i class="fab fa-youtube"></i></a></li>
			</ul>
		</div>
	</div>
    )
}

export default InstructorCard;