/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: Article.jsx
  Created and maintained by: [Santoshi Santoshi]
    
    Description: This file contains the Article component, which displays the article details in a card format.
    This component is used to display the articles on the blog page.
    The article details are passed as props from the parent component.
*/

import { Link } from "react-router-dom";


export default function Article(props) {
    return (
        <article>
            <img className="image-fluid" src={props.image}
                 alt={props.title}/>
            <div>
                <h2 className="font-lg">{props.title} </h2>
                <span className="blog-article-date">{props.date}</span>
                <Link to="/blog/article" state={props} className="button button-primary">Read article</Link>
            </div>
        </article>
    )
}
