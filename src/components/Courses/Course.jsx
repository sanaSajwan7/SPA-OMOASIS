/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: Course.jsx
  Created and maintained by: [Gaurav Gaurav]
*/


import {Link} from "react-router-dom";

export default function Course(props) {

    return (
        <article>
            <img className="image-fluid" src={props.image}
                 alt={props.title}/>
            <div>
                <h2 className="font-lg"><span className="text-primary">Level {props.level}:</span> {props.title} </h2>
                <Link to="/courses/details" state={props} className="button button-primary">View course</Link>
            </div>
        </article>  
    )
}
