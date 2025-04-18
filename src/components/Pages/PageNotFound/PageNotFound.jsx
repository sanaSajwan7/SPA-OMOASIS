/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: PageNotFound.jsx
  Created and maintained by: [Abhishek Ajay Chachad]
*/


import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from "../../Shared/PageTitle.jsx";
import Layout from "../Layout/Layout.jsx";

export default function PageNotFound() {
    return (
        <>
            <PageTitle title="Page Not Found"/>
            <Layout body={
                <>
                    {/*Page not found*/}
                    <section id="hero">
                        <h1 className="text-primary">
                            <span className="text-danger">404 </span>
                            | Page Not Found
                        </h1>
                    </section>
                    <div className="container mt-3 d-flex flex-column align-items-center mt-5 text-center">
                        <span className="bi bi-file-earmark-x-fill text-danger display-1" aria-hidden="true"/>
                        <p className="text-muted">The page you are looking for does not exist.</p>
                        <Link to="/" className="btn btn-primary mt-3">Go to courses</Link>
                    </div>
                </>
            }/>
        </>
    );
}
