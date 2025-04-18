/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: Layout.jsx
  Created and maintained by: [Gaurav Gaurav]
    
    
    Description: This file contains the Layout component, which is the main layout of the application.
    This component is used to display the header, footer and main content of the application.
    The main content is passed as props from the parent component.
*/


import OmOasisLogo from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";

export default function Layout(props) {

    const currentYear = new Date().getFullYear();


    return (
        <div className="page-wrapper">
            <header>
                {/*logo svg*/}
                <div className="logo-wrapper">
                    <img className="logo" src={OmOasisLogo} alt="logo" />
                        <span className="branding">Om Oasis</span>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/comparison">Comparison</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                {props.body}
            </main>

            <footer>

                {/*Footer links*/}
                <section id="footer-links">
                    <h2 className="font-md">Links</h2>
                    <nav>
                        <ul className="footer-links">
                            <li>
                                <Link to="/courses">
                                    <ion-icon name="book"></ion-icon>
                                    &nbsp;&nbsp;Courses</Link>
                            </li>
                            <li>
                                <Link to="/blog">
                                    <ion-icon name="newspaper"></ion-icon>
                                    &nbsp;&nbsp;Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <ion-icon name="chatbubbles"></ion-icon>
                                    &nbsp;&nbsp;Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </section>

                {/*Social media links*/}
                <section id="footer-social-links">
                    <h2 className="font-md">Social</h2>
                    <nav>
                        <ul className="footer-links">
                            <li><a href="#">
                                <ion-icon name="logo-twitter"></ion-icon>
                                &nbsp;&nbsp;Twitter</a></li>
                            <li><a href="#">
                                <ion-icon name="logo-facebook"></ion-icon>
                                &nbsp;&nbsp;Facebook</a></li>
                            <li><a href="#">
                                <ion-icon name="logo-instagram"></ion-icon>
                                &nbsp;&nbsp;Instagram</a></li>
                            <li><a href="#">
                                <ion-icon name="logo-youtube"></ion-icon>
                                &nbsp;&nbsp;YouTube</a></li>
                        </ul>
                    </nav>
                </section>

                {/*Contact information*/}
                <section id="footer-newsletter-form">
                    <h2 className="font-md">Newsletter</h2>
                    <form onSubmit={(e) => {
                            e.preventDefault();
                            const email = e.target.email.value;
                            console.log("Newsletter subscribed:", email);
                            alert(`Thanks for subscribing with ${email}`);
                            e.target.reset();
                        }}>
                            <label htmlFor="email">Subscribe to our newsletter</label>
                            <div className="input-group input-group-with-button">
                                <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                <button className="button button-primary" type="submit" aria-label="Subscribe">
                                    <ion-icon name="send"></ion-icon>
                                </button>
                            </div>
                        </form>
                </section>

                <p id="copyright">&copy; {currentYear} Om Oasis. All rights reserved.</p>
            </footer>

        </div>
    );
}

