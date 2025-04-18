/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: Comparison.jsx
  Created and maintained by: [Gaurav Gaurav]
  
    Description: This file contains the Comparison component, which displays a comparison table of different SPA frameworks.
    This component is used to display the comparison of different SPA frameworks on the comparison page.
*/


import PageTitle from "../../Shared/PageTitle.jsx";
import Layout from "../Layout/Layout.jsx";

export default function Comparison() {
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '2rem',
        backgroundColor: '#f9f9f9',
    };

    const thStyle = {
        backgroundColor: '#dce6f1',
        color: '#333',
        padding: '12px',
        border: '1px solid #ccc',
        textAlign: 'center'
    };

    const tdStyle = {
        padding: '12px',
        border: '1px solid #ccc',
        textAlign: 'center'
    };

    const sectionStyle = {
        marginTop: '3rem',
        lineHeight: '1.8rem'
    };

    const headingStyle = {
        marginTop: '2rem',
        color: '#2c3e50'
    };

    const ulStyle = {
        paddingLeft: '1.5rem'
    };

    return (
        <>
            <PageTitle title="SPA Framework Comparison" />
            <Layout body={
                <>
                    <section id="hero" style={{ padding: '2rem 0', textAlign: 'center', background: '#eef3f7' }}>
                        <h1 className="text-primary" style={{ fontSize: '2rem' }}>SPA Framework Comparison</h1>
                    </section>

                    <div className="container" style={{ padding: '2rem' }}>
                        <h2 style={{ color: '#2d3436' }}>ReactJS vs AngularJS vs EmberJS</h2>
                        <p>
                            Single Page Applications (SPAs) dynamically load content, improving user experience by avoiding full page reloads. Let’s compare the three popular SPA frameworks.
                        </p>

                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>Feature</th>
                                    <th style={thStyle}>ReactJS</th>
                                    <th style={thStyle}>AngularJS</th>
                                    <th style={thStyle}>EmberJS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={tdStyle}>Type</td>
                                    <td style={tdStyle}>Library</td>
                                    <td style={tdStyle}>Full Framework</td>
                                    <td style={tdStyle}>Full Framework</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>Developer</td>
                                    <td style={tdStyle}>Meta (Facebook)</td>
                                    <td style={tdStyle}>Google</td>
                                    <td style={tdStyle}>Ember Core Team</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>Architecture</td>
                                    <td style={tdStyle}>Component-based</td>
                                    <td style={tdStyle}>MVC / MVVM</td>
                                    <td style={tdStyle}>Convention over Configuration</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>Data Binding</td>
                                    <td style={tdStyle}>One-way</td>
                                    <td style={tdStyle}>Two-way</td>
                                    <td style={tdStyle}>Two-way</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>Learning Curve</td>
                                    <td style={tdStyle}>Low</td>
                                    <td style={tdStyle}>High</td>
                                    <td style={tdStyle}>High</td>
                                </tr>
                            </tbody>
                        </table>

                        <section style={sectionStyle}>
                            <h3 style={headingStyle}>Advantages & Disadvantages</h3>

                            <h4 style={{ color: '#0984e3' }}>ReactJS</h4>
                            <ul style={ulStyle}>
                                <li><strong>Pros:</strong> Fast rendering, reusable components, massive ecosystem.</li>
                                <li><strong>Cons:</strong> Only handles the UI layer, needs extra libraries for routing/state.</li>
                            </ul>

                            <h4 style={{ color: '#d63031' }}>AngularJS</h4>
                            <ul style={ulStyle}>
                                <li><strong>Pros:</strong> Full-featured, strong support, integrated tooling.</li>
                                <li><strong>Cons:</strong> Heavy, complex, higher learning curve.</li>
                            </ul>

                            <h4 style={{ color: '#6c5ce7' }}>EmberJS</h4>
                            <ul style={ulStyle}>
                                <li><strong>Pros:</strong> Great for large teams, opinionated structure.</li>
                                <li><strong>Cons:</strong> Slower updates, less popular today.</li>
                            </ul>
                        </section>

                        <section style={sectionStyle}>
                            <h3 style={headingStyle}>Conclusion</h3>
                            <p>
                                While each framework has its strengths, <strong>ReactJS</strong> is the most popular due to its flexibility, component-based architecture, and large community. It is ideal for modern dynamic SPAs like the one built in this project.
                            </p>
                        </section>
                    </div>
                </>
            } />
        </>
    );
}
