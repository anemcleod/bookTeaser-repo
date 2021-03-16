import React from 'react';
import '../assets/stylesheets/contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
            <h3>interested in publishing this book?</h3>

            <form 
                className="contact-form" 
                action="">
                <textarea 
                    className="form-input form-message" 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    placeholder="message...">
                </textarea>

                <div className="contact-details">
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="name" 
                        required/>

                    <input 
                        type="email" 
                        className="form-input" 
                        placeholder="email" 
                        required/>

                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="company" 
                        required/>

                    <div className="form-btn">
                        <input 
                            className="btn_send" 
                            type="submit" 
                            value="send"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;