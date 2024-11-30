import React from 'react';
import styles from './home.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h3>Order Restaurant food, takeaway and groceries.</h3>
        <h1>
          Feast Your Senses, <span className={styles.highlight}>Fast and Fresh</span>
        </h1>
        <p>Enter a postcode to see what we deliver</p>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="e.g. EC4R 3TE" />
          <button>Search</button>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <img
          src="https://res.cloudinary.com/demo/image/upload/c_fill,h_200,w_300/sample.jpg"
          alt="Main Visual"
          className={styles.mainImage}
        />
        <div className={styles.notificationContainer}>
          <div className={styles.notification}>
            <p>Order 📦</p>
            <span>We’ve received your order!</span>
          </div>
          <div className={styles.notification}>
            <p>Order Accepted ✅</p>
            <span>Your order will be delivered shortly</span>
          </div>
          <div className={styles.notification}>
            <p>Your rider’s nearby 🎉</p>
            <span>They’re almost there – get ready!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
