import React from 'react'

const ContactForm = () => (

    
    <div className="support-container">
        
        <div className="support-info">
            <h2>We want our costumer to have a good experince if any convinience you may contact us filling this form below. </h2>
        </div>

        <form className="contact-form" method="POST" action="/contact">
            <div className="form-field">
                <label htmlFor="name">
                    <div className="label-content">Name:</div>
                    <input type="text" name="name" required />
                </label>
            </div>

            <div className="form-field">
                <label htmlFor="email">
                    <div className="label-content">Email:</div>
                    <input type="email" name="email" required />
                </label>
            </div>

            <div className="form-field">
                <label htmlFor="message">
                    <div className="label-content">Message:</div>
                    <textarea className="stretch" name="message" rows="5" required />
                </label>
            </div>

            <button type="submit">Send</button>

            <div>
                {window.location.hash === '#success' &&
                    <div id="success">
                        <p>Your message has been sent!</p>
                    </div>
                }
                {window.location.hash === '#error' &&
                    <div id="error">
                        <p>An error occured while submitting the form.</p>
                    </div>
                }
            </div>
        </form>
    </div>
)

export default ContactForm