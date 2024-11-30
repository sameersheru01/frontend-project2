import React from 'react';
import styles from './restaurantbar.module.css';

export default function Restaurantbar() {
  const restaurants = [
    {
      image:
        'https://res.cloudinary.com/diuif9frr/image/upload/v1732900651/food%20delivery/bhvw5aqhdlslsibgg8ho.png',
      name: "McDonald’s London ",
    },
    {
      image:
        'https://res.cloudinary.com/diuif9frr/image/upload/v1732900652/food%20delivery/w8qxfv4gtp95olaz9fvi.png',
      name: 'Papa Johns',
    },
    {
      image:
        'https://res.cloudinary.com/diuif9frr/image/upload/v1732900652/food%20delivery/d9pcbueljejztksujkyf.png',
      name: 'KFC West London',
    },
    {
      image:
        'https://res.cloudinary.com/diuif9frr/image/upload/v1732900653/food%20delivery/abpcpt0o2xqy0z0bcemj.png',
      name: 'Texas Chicken',
    },
    {
      image:
        'https://res.cloudinary.com/diuif9frr/image/upload/v1732900652/food%20delivery/s0eyvodyhmtpc75zwknq.png',
      name: 'Burger King',
    },
    {
      image:
        'https://res.cloudinary.com/diuif9frr/image/upload/v1732900652/food%20delivery/w9lnd366quvtqsmyqrxr.png',
      name: 'Shaurma 1',
    },
  ];

  return (
    <div className={styles.restaurantBar}>
        <p className={styles.p}>Similar Restaurants</p>
        <div className={styles.restaurants}>
      {restaurants.map((data, index) => (
        <div key={index} className={styles.image}>
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
