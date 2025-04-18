/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: Courses.jsx
  Created and maintained by: [Abhishek Ajay Chachad]
*/

import Layout from "../Layout/Layout.jsx";
import PageTitle from "../../Shared/PageTitle.jsx";

import Level1Image from "../../../assets/images/courses/level-1.svg";
import Level2Image from "../../../assets/images/courses/level-2.svg";
import Level3Image from "../../../assets/images/courses/level-3.svg";
import Level4Image from "../../../assets/images/courses/level-4.svg";
import Course from "../../Courses/Course.jsx";

export default function Courses() {
    return (
        <>
            <PageTitle title="Courses" />
            <Layout body={
                <>
                    {/*Courses*/}
                    <section id="hero">
                        <h1 className="text-primary">
                            Courses
                        </h1>
                    </section>

                    <div id="courses">
                        <Course image={Level1Image} level="1" title="Befriend the Breath" />
                        <Course image={Level2Image} level="2" title="Prana and Pranayama" />
                        <Course image={Level3Image} level="3" title="Emotional Cleansing through the Chakras" />
                        <Course image={Level4Image} level="4" title="Mindfulness Meditation" />
                    </div>
                </>
            }/>
        </>
    )
}
