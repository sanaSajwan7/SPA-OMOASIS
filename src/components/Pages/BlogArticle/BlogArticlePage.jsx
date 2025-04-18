/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: BlogArticlePage.jsx
  Created and maintained by: [Ashwin Mathew] and [Santoshi Santoshi]
    Description: This file contains the BlogArticlePage component, which displays the details of a selected blog article.
  This component is used to display the content of a blog article when the user clicks on it from the blog list.
*/


import Layout from "../Layout/Layout.jsx";
import PageTitle from "../../Shared/PageTitle.jsx";

import {Link, useLocation} from "react-router-dom";

export default function BlogArticlePage() {
    const location = useLocation();
    // Get the blog article details from the location state
    const blogProps = location.state || {};

    return (
        <>
            <PageTitle title="Spiritual Roadblock - Blog" />
            <Layout body={
                <>
                    {/*Blog article*/}
                    <section id="hero">
                        <Link to="/blog" className="back-button"><ion-icon name="arrow-back"></ion-icon> Back to blog</Link>
                        <h1 className="text-primary">
                            {blogProps.title}
                        </h1>
                    </section>

                    <div id="blog-article">
                        <img className="image-fluid image-article" src={blogProps.image} alt={blogProps.image} />
                            <div>
                                <span className="blog-article-date">{blogProps.date}</span>
                                <p>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam autem consequuntur ea et eum exercitationem, incidunt labore nisi non nulla optio quam quas quia quo ratione sint ullam voluptatibus.</span><span>Accusantium ad consequatur cumque cupiditate, dicta distinctio dolore ea expedita nam natus nulla, possimus reiciendis reprehenderit soluta tempora, veniam veritatis voluptates! Blanditiis facilis iste magni molestias natus perspiciatis saepe voluptas?</span><span>Animi cupiditate dicta dignissimos distinctio dolorum, eligendi enim eveniet laudantium maiores necessitatibus repellat sequi similique sunt totam ut. Eius itaque labore nam nemo repudiandae saepe totam ut vel velit veniam.</span><span>Aspernatur eaque minima minus officia. Alias architecto assumenda blanditiis consequuntur, debitis ea eligendi facere laboriosam maxime minima modi officiis placeat porro provident quam quod, reprehenderit sed tempora. Alias odio, tenetur!</span><span>Alias animi aspernatur debitis deleniti distinctio dolore enim est eveniet fugit harum hic ipsa, ipsam, officiis pariatur, quibusdam repellendus reprehenderit sapiente soluta sunt vero! Hic maxime perferendis ut. Corporis, ullam!</span>
                                </p>
                            </div>
                    </div>
                </>
            }/>
        </>
    )
}
