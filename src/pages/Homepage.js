import React from 'react'
import HeroSection from '../components/home'
import Restaurantbar from '../components/restaurantbar'
import styles from './HomePage.module.css'

function Homepage() {
  return (
    <div className={styles.container} >
    <div className={styles.section1}>
      <HeroSection />
    </div>
    <div className={styles.img1}>
      <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733220986/food%20delivery/xbsb5a3ti6dreuo9kgbr.png' />
    </div>
    <div className={styles.img2}>
      <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733220986/food%20delivery/n7mbvxnatnxjbaanaslt.png' />
    </div>
    <div className={styles.restaurantbar}>
      <Restaurantbar/>
    </div>
    <div className={styles.img3} >
      <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733220986/food%20delivery/zcvxpezljkppy3afzdtl.png'/>
    </div>
    <div className={styles.img4}>
      <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733222031/food%20delivery/o65dr8mwgfneihwe45fx.png'/>
      <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733222031/food%20delivery/uxheauee4od6liu83kdv.png'/>
    </div>
    <div className={styles.img5}>
      <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733221607/food%20delivery/q1gxcqzhp1kcykuscx1g.png'/>
    </div>
    </div>
  )
}

export default Homepage