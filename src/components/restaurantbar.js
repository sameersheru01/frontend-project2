import React, { useEffect, useState } from 'react';
import styles from './restaurantbar.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Restaurantbar() {
  const [Restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleNavigate = (restaurant) => {
    navigate("/product", { state: { restaurant } });
  };

  
  useEffect(() => {
    // Function to fetch restaurants
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users/r/restaurants"); // API endpoint
        setRestaurants(response.data); 
        console.log(response.data)
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching restaurants");
      }
    };

    fetchRestaurants(); // Call the function
  }, []);

  return (
    <div className={styles.restaurantBar}>
        <p className={styles.p}>Similar Restaurants</p>
        <div className={styles.restaurants}>
      {Restaurants.map((data, index) => (
        <div key={index} className={styles.image} onClick={() => handleNavigate(data)}>
          <img
            src={data.image}
            alt={data.name}
            className={styles.restaurantImage}
          />
          <p className={styles.restaurantName}>{data.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
