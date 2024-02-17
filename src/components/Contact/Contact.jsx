import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <p>Feel free to reach out to me via email at <a href="mailto:your-email@example.com">your-email@example.com</a></p>
            </div>
            <div className="contact-form">
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;