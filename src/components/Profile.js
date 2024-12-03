import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  const savedPaymentMethods = [
    { id: 1, cardNumber: "xxxx xxxx xxxx 1234", name: "Mike Ross" },
    { id: 2, cardNumber: "xxxx xxxx xxxx 6789", name: "Mike Ross" },
    { id: 3, cardNumber: "xxxx xxxx xxxx 3468", name: "Mike Ross" },
  ];

  return (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.header}>
        <div className={styles.img}>
        <img
          src="https://via.placeholder.com/100" // Replace with the actual user image URL
          alt="Profile"
          className={styles.profileImage}
        />
          <h1>Mike Ross</h1>
        </div>
        <div>
        </div>
        <button className={styles.editButton}>Edit</button>
      </div>

      {/* Profile Fields */}
      <div className={styles.fieldsContainer}>
        <div className={styles.field}>
          <label>Full Name</label>
          <input type="text" value="Mike Ross" readOnly />
        </div>
        <div className={styles.field}>
          <label>Email Address</label>
          <input type="email" value="mikeross@gmail.com" readOnly />
        </div>
        <div className={styles.field}>
          <label>Gender</label>
          <input type="text" value="Male" readOnly />
        </div>
        <div className={styles.field}>
          <label>Country</label>
          <input type="text" value="India" readOnly />
        </div>
      </div>

      {/* Saved Payment Methods */}
      <h2 className={styles.sectionTitle}>Saved Payment Methods</h2>
      <div className={styles.cardsContainer}>
        {savedPaymentMethods.map((method) => (
          <div key={method.id} className={styles.card}>
            <div className={styles.cardDetails}>
              <span>{method.cardNumber}</span>
              <p>{method.name}</p>
            </div>
            <button className={styles.editIcon}>&#9998;</button>
          </div>
        ))}
        <div className={styles.card }>
          <span>+ Add New Card</span>
        </div>
      </div>
      <div className={styles.overlay}>
      <div className={styles.popup}>
        <div>
        <h2 className={styles.title}>Edit Payment Method</h2></div>
        <form className={styles.form}>
          {/* Card Number */}
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              defaultValue="XXXX XXXX XXXX 1234"
              disabled
            />
          </div>
          {/* Expiration */}
          <div className={styles.formGroup}>
            <label htmlFor="expiration">Expiration</label>
            <input type="text" id="expiration" name="expiration" defaultValue="11/26" />
          </div>
          {/* CVC */}
          <div className={styles.formGroup}>
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" name="cvc" defaultValue="XXX" />
          </div>
          {/* Name on Card */}
          <div className={styles.formGroup}>
            <label htmlFor="nameOnCard">Name on Card</label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              defaultValue="Mike Ross"
            />
          </div>
        </form>
          {/* Buttons */}
          <div className={styles.buttons}>
            <button type="button" className={styles.removeButton} >
              Remove
            </button>
            <div>
            <button type="button" className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.saveButton} >
              Save Changes
            </button>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
