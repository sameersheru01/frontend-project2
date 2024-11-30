import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section: Logo and App Links */}
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>
            
              <img
                src="https://res.cloudinary.com/diuif9frr/image/upload/v1732687317/food%20delivery/logo2.png"
                alt="Logo 2"
                className={`${styles.logo}`}
              />
          </div>
          <div className={styles.appLinks}>
              <img
                src="https://res.cloudinary.com/diuif9frr/image/upload/v1732688314/food%20delivery/Apple1.png"
                alt="App Store"
                className={`${styles.appBadge} `}
              />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className={`${styles.appBadge}`}
            />
          </div>
          <p>Company # 490039-445, Registered with <br/> House of companies.</p>
        </div>

        {/* Center Section: Email Subscription */}
        <div className={styles.footerCenter}>
          <p>Get Exclusive Deals in your Inbox</p>
          <form className={styles.newsletterForm}>
          <div className={styles.inputContainer}>
                <input
                type="email"
                placeholder="youremail@gmail.com"
                className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterButton}>
                Subscribe
                </button>
            </div>
          </form>
          <span>we wont spam, read our <span style={{textDecoration:"underline"}} >email policy</span> </span>
          <div className={styles.socialIcons}>
            <a  className={styles.socialIcon}>
            <img src="https://res.cloudinary.com/diuif9frr/image/upload/v1732690643/food%20delivery/invgvzgz01psc1379ig9.png" />
            </a>
            <a href="#twitter" className={styles.socialIcon}>
            <img src="https://res.cloudinary.com/diuif9frr/image/upload/v1732690643/food%20delivery/kgeizplpu8rmkicujm4k.png" />
            </a>
            <a href="#instagram" className={styles.socialIcon}>
            <img src="https://res.cloudinary.com/diuif9frr/image/upload/v1732690643/food%20delivery/mxdlqil6pwvzevakwvev.png" />
            </a>
            <a href="#snapchat" className={styles.socialIcon}>
              <img src="https://res.cloudinary.com/diuif9frr/image/upload/v1732690642/food%20delivery/deyirykp59qiw9elh9p7.png" />
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className={styles.footerRight}>
          <div className={styles.legalLinks}>
            <h4>Legal Pages</h4>
            <a href="#terms">Terms and Conditions</a>
            <a >Privacy </a>
            <a >Cookies </a>
            <a href="#modern-slavery">Modern Slavery Statement</a>
          </div>
          <div className={styles.importantLinks}>
            <h4>Important Links</h4>
            <a >Get Help</a>
            <a >Add your restaurant</a>
            <a >Sign up to deliver</a>
            <a >Create a business account</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
    </footer>
      <div className={styles.footerBottom}>
        <p className={styles.p}>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className={styles.policy}>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
