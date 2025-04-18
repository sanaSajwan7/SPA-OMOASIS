/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: Blog.jsx
  Created and maintained by: [Ashwin Mathew]
    Description: This file contains the Blog component, which displays the list of blog articles.
    This component is used to display the blog articles on the blog page.
*/


import PageTitle from "../../Shared/PageTitle.jsx";
import Layout from "../Layout/Layout.jsx";

import Article1Image from "../../../assets/images/blog/roadyoga.jpg";
import Article2Image from "../../../assets/images/blog/faith1.jpg";
import Article3Image from "../../../assets/images/blog/eating.jpg";
import Article from "../../Blog/Article.jsx";

export default function Blog() {
    return (
        <>
            <PageTitle title="Blog" />
            <Layout body={
                <>
                    {/*Blog*/}
                    <section id="hero">
                        <h1 className="text-primary">
                            Blog
                        </h1>
                    </section>

                    <div id="blog">

                        <Article image={Article1Image} title="Spiritual Roadblock" date="14th August 2024"/>
                        <Article image={Article2Image} title="Strengthen Your Faith" date="7th August 2024"/>
                        <Article image={Article3Image} title="Mindful Eating" date="31st July 2024"/>

                    </div>
                </>
            }/>
        </>
    )
}
