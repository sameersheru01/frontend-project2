import React from 'react'
import Formcomponent from '../components/Formcomponent'
import styles from './Authpage.module.css'

export default function authpage() {
  return (
    <div className={styles.container}>
        <div className={styles.right}>
           <Formcomponent /> 
           </div>
        <div className={styles.left}>
        </div>
    </div>
  )
}
