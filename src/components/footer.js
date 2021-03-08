import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/stylesheets/footer.css";

import PaymentPortal from './payment';

const Footer = ({setOffsetY, setChapter}) => {

    const [showPayment, setShowPayment] = useState(false);

    const reset = () => {
        setOffsetY(0);
        setChapter(1);
    };    

    const togglePayment = () => {
        setShowPayment(prevState => !prevState);
    }

 return (
    <div className="footer-container">
       
        <div className="cta-container">
            <div>
                <h3>want to read more?</h3>
            </div>
            <div className="cta-purchase">
                <p>purchase the book<span>$2.99</span></p>
                <button className="buy__button" onClick={togglePayment}>
                    buy
                </button>
            </div>
        </div>

        <div className="footer-menu">
            <div className="socials">
                <div className="social-btn"><FontAwesomeIcon icon={['fab', 'facebook']}/></div>
                <div className="social-btn"><FontAwesomeIcon icon={['fab', 'instagram']}/></div>
                <div className="social-btn"><FontAwesomeIcon icon={['fab', 'linkedin']}/></div>
            </div>
            
            <div className="contributors">
                <div className="contributor">
                    <h4>Copyright</h4>
                    <p>Author Name 2020</p>
                </div>
                <div className="contributor">
                    <h4>Design</h4>
                    <p>Ane Mcleod</p>
                </div>
            </div>

            <div className="legal">
                <Link to="/terms_and_conditions"><h4>t&amp;c's</h4></Link>
                <button onClick={reset} class="back__button">go back <span>to the beginning</span></button>    
            </div>

        </div> 
        {
            showPayment && <PaymentPortal togglePayment={togglePayment}/>
        }
        
    </div>
 )
}

export default Footer;