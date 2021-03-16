import React from 'react';
import "../assets/stylesheets/footer.css";

const PaymentPortal = ({togglePayment}) => {
    return (
        <div className="payment-container">
            <div className="payment-form-container">
                <h2>Sorry, just a demo</h2>

                <button 
                    className="close-payment" 
                    onClick={togglePayment}>
                    close
                </button>
            </div>
        </div>
    )
}

export default PaymentPortal;