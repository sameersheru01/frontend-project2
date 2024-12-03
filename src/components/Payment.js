import React, { useState } from 'react'
import styles from './Payment.module.css'

export default function Payment() {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const paymentMethods = [
      { id: 2, name: "MaestroKard", icon: "M" },
      { id: 3, name: "Paypal", icon: "P" },
      { id: 4, name: "Stripe", icon: "S" },
      { id: 5, name: "Add Debit Card", icon: "+" },
    ];
  
    const handleMethodSelect = (id) => {
      setSelectedMethod(id);
    };
  
    return (
      <div className={styles.paymentContainer}>
        {/* Left Section - Payment Methods */}
        <div className={styles.methodContainer}>
          <h2>Choose and Pay</h2>
          <div className={styles.paymentMethods}>
           <div className={styles.box}>
           <div className={styles.methodCard}>
            <div className={styles.methodDetails}>
                <p>Wallet</p>
                <span>Available balance: 300.00</span>
            </div>
            </div>
           </div>
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`${styles.methodCard} ${
                  selectedMethod === method.id ? styles.active : ""
                }`}
                onClick={() => handleMethodSelect(method.id)}
              >
                
                <div className={styles.methodDetails}>
                  <p>{method.name}</p>
                  
                </div>
                <input type='radio' value={method.name} />
              </div>
            ))}
            <div className={styles.methodCard}>
            <div className={styles.methodDetails}>
                <p>+ Add Card</p>
            </div>
            </div>
          </div>
        </div>
  
        {/* Right Section - Payment Summary */}
        <div className={styles.right}>
        <div className={styles.summaryContainer}>
          <div className={styles.da}>
          <h3>Amount to be paid</h3>
          <p className={styles.amount}>₹240</p>
          </div>
          <button className={styles.proceedButton}>Proceed Payment</button>
        </div>
        </div>
      </div>
    );
}
