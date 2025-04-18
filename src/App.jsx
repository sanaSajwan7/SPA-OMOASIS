/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: App.jsx
  Created and maintained by: [Abhishek Ajay Chachad]
    Description: This file contains the main App component, which is the entry point of the application.
    This component sets up the routing for the application using React Router.
    It defines the routes for the different pages of the application.
*/


import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Comparison from "./components/Pages/Comparison/Comparison.jsx";
import Courses from "./components/Pages/Courses/Courses.jsx";
import CourseDetails from "./components/Pages/CourseDetails/CourseDetails.jsx";
import Blog from "./components/Pages/Blog/Blog.jsx";
import BlogArticlePage from "./components/Pages/BlogArticle/BlogArticlePage.jsx";
import Contact from "./components/Pages/Contact/Contact.jsx";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound.jsx";

import './App.css'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate replace to={"/courses"} />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:id" element={<CourseDetails />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/article" element={<BlogArticlePage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/comparison" element={<Comparison />} />
                    <Route path="*" element={<Navigate replace to={"/page-not-found"} />} />
                    <Route path="/page-not-found" element={<PageNotFound />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
