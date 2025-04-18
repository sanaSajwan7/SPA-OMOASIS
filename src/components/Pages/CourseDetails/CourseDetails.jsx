/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: CourseDetails.jsx
  Created and maintained by: [Gaurav Gaurav] and [Santoshi Santoshi]
*/


import Layout from "../Layout/Layout.jsx";
import PageTitle from "../../Shared/PageTitle.jsx";

import {Link, useLocation} from "react-router-dom";

export default function CourseDetails() {
    const location = useLocation();
    const courseProps = location.state || {};

    const handleTopScroll = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
        <>
            <PageTitle title="Courses" />
            <Layout body={
                <>
                    {/*Courses Details*/}
                    <section id="hero">
                        <Link to="/courses" className="back-button"><ion-icon name="arrow-back"></ion-icon>
                            Back to courses
                        </Link>
                        <h1 className="text-primary">
                            {courseProps.title}
                        </h1>
                    </section>

                    <div id="course-details">

                        <img className="image-fluid mb-5" src={courseProps.image} alt={courseProps.title} />

                            <div>
                                <p className="mb-5">Find creative and experiential invitations to learn and explore the body and what it means to be well. These classes and workshops are led by Adriene and a diverse curation of unique and experienced guest teachers.

                                    Join Find What Feels Good and access over 700 videos including yoga and meditation for all levels. Explore daily practices, workshops, in depth learning, weekly or monthly accountability series, and an opportunity to connect with a one of a kind global community. Access the full YWA library without ads and enjoy monthly membership vlogs from Adriene. This is your one stop shop for yoga, creativity, wellness, and all things FWFG.</p>

                                <section>
                                    <h2>Contents</h2>
                                    <ul className="mb-5 course-contents">
                                        <li><Link to="#" onClick={handleTopScroll}>Lorem ipsum dolor sit amet</Link></li>
                                        <li><Link to="#" onClick={handleTopScroll}>Aliquam tincidunt mauris eu risus</Link></li>
                                        <li><Link to="#" onClick={handleTopScroll}>Vestibulum auctor dapibus neque</Link></li>
                                        <li><Link to="#" onClick={handleTopScroll}>Nunc dignissim risus id metus</Link></li>
                                        <li><Link to="#" onClick={handleTopScroll}>Cras ornare tristique elit</Link></li>
                                    </ul>

                                </section>
                                <Link to="#" onClick={handleTopScroll} className="button button-primary">Enroll now</Link>
                            </div>


                    </div>
                </>
            }/>
        </>
    )
}
