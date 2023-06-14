import React, { useState } from 'react';
import styles from '../styles/payment.module.css';

const Payment = ({ onPaymentChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onPaymentChange(value);
    };

    return (
        <div className={styles.container}>
            <label htmlFor="card-netbanking-upi" className={`${styles.label} ${selectedOption === 'onlinePay' ? styles.selected : ''}`}>
                <input
                    className={styles.input}
                    type="radio"
                    name="paymentOption"
                    id="card-netbanking"
                    value="onlinePay"
                    checked={selectedOption === 'onlinePay'}
                    onChange={handleOptionChange}
                />
                Card
            </label>
            <label htmlFor="cod" className={`${styles.label} ${selectedOption === 'COD' ? styles.selected : ''}`}>
                <input
                    className={styles.input}
                    type="radio"
                    name="paymentOption"
                    id="cod"
                    value="COD"
                    checked={selectedOption === 'COD'}
                    onChange={handleOptionChange}
                />
                Cash On Delivery (COD)
            </label>
        </div>
    );
};

export default Payment;
