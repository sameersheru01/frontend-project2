import React, { useEffect, useState } from "react";
import styles from "./Address.module.css";
import axios from "axios";
import { addtokentoheader } from "./helper";

export default function Address() {
  const [addAddress, setAddAddress] = useState(false);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    pincode: "",
    phone: "",
    address: "",
  });
  const [addresses, setAddresses] = useState([]);

  const fetchData = async () => {
    try {
      const headers = addtokentoheader({ headers: {} });
      const response = await axios.get(`http://localhost:5000/users/r/alladdress`, { headers });
      console.log(response.data.addresses);
      setAddresses(response.data.addresses); // Assuming API returns { addresses: [...] }
    } catch (error) {
      console.error("Error occurred while making the request:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSaveAddress = async (e) => {
    e.preventDefault();
    try {
      const headers = addtokentoheader({ headers: {} });
      console.log(formData)
      const response = await axios.post(`http://localhost:5000/users/r/addaddress`, formData, {
        headers
      });
      if (response.status === 200) {
        setAddresses((prev) => [...prev, formData]);
        setAddAddress(false);
        setFormData({
          state: "",
          city: "",
          pincode: "",
          phone: "",
          address: "",
        });
      }
    } catch (error) {
      console.error("Error occurred while saving the address:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Your Addresses</h2>
      <div className={styles.addressList}>
        {/* Add Address Card */}
        <div className={styles.addAddressCard} onClick={() => setAddAddress(true)}>
          <div className={styles.addIcon}>+</div>
          <p>Add Address</p>
        </div>

        {/* Existing Addresses */}
        {addresses.map((address, index) => (
          <div key={index} className={styles.addressCard}>
            <h4 className={styles.name}>
              {address.name}
              {address.isDefault && <span className={styles.defaultTag}>Default</span>}
            </h4>
            <p className={styles.address}>{address.fulladdress}</p>
            <p className={styles.phone}>Phone Number: {address.phonenumber}</p>
            <div className={styles.actions}>
              <div className={styles.btn}>
                <button className={styles.editButton}>Edit</button>
              </div>
              <button className={styles.removeButton}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {addAddress && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h2>Add Address</h2>
              <button className={styles.closeButton} onClick={() => setAddAddress(false)}>
                &times;
              </button>
            </div>
            <form className={styles.form} onSubmit={handleSaveAddress}>
              <div className={styles.row}>
                <select
                  name="state"
                  className={styles.input}
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                  <option value="state4">State 4</option>
                  <option value="state5">State 5</option>
                </select>
                <input
                  type="text"
                  name="city"
                  placeholder="City/District"
                  className={styles.input}
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pin Code"
                  className={styles.input}
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <textarea
                name="address"
                placeholder="Enter full address"
                className={styles.textarea}
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className={styles.saveButton}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
