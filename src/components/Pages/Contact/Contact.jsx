/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: Contact.jsx
  Created and maintained by: [Santoshi Santoshi]
*/


import Layout from "../Layout/Layout.jsx";
import PageTitle from "../../Shared/PageTitle.jsx";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form Submitted:", formData);
        alert("Thank you for contacting us!");
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <>
            <PageTitle title="Contact" />
            <Layout body={
                <>
                    <section id="hero">
                        <h1 className="text-primary">Contact</h1>
                    </section>

                    <section id="contact">
                        <h2 className="text-primary text-center">
                            Have a question? Need help? <br /> Get in touch with us!
                        </h2>

                        <form id="contact-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                accessKey="n"
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                accessKey="a"
                            />

                            <label htmlFor="message">Message</label>
                            <textarea
                                placeholder="Message"
                                id="message"
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                accessKey="m"
                            ></textarea>

                            <button type="submit" className="button button-primary">Send</button>
                        </form>
                    </section>
                </>
            } />
        </>
    );
}
