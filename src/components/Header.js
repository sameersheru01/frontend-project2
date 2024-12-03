import React from "react";
import styles from "./Header.module.css";

function Header({onToggle}) {
  return (
    <header className={styles.header}>
      {/* Top Info Bar */}
      <div className={styles.topBar}>
        <div className={styles.details}>
        <span className={styles.promo}>
          🌟 Get 5% Off your first order, <span style={{color:"#FC8A06"}}>Promo: ORDER5</span>
        </span>
        <span className={styles.location}>
          📍 Regent Street, A4, A4201, London{" "}
          <a href="#change-location" className={styles.changeLocation}>
            Change Location
          </a>
        </span>
        </div>
        <button className={styles.cartButton} onClick={onToggle}>
            <span>🛒 My Cart</span>
            <span>🛒 My Cart</span>
            <span>🛒 My Cart</span>
          </button>
      </div>

      {/* Main Navigation */}
      <div className={styles.navBar}>
        {/* Logo */}
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/diuif9frr/image/upload/v1732687317/food%20delivery/logo1.png"
            alt="Order Logo"
          />
        </div>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <a href="#home" className={styles.navLink}>
            Home
          </a>
          <a href="#menu" className={styles.navLink}>
            Browse Menu
          </a>
          <a href="#offers" className={styles.navLink}>
            Special Offers
          </a>
          <a href="#restaurants" className={styles.navLink}>
            Restaurants
          </a>
          <a href="#track-order" className={styles.navLink}>
            Track Order
          </a>
        <div className={styles.actions}>
          
          <button className={styles.loginButton}>
            🔒 Login/Signup
          </button>
        </div>
        </nav>

        {/* Buttons */}
      </div>
    </header>
  );
}

export default Header;
