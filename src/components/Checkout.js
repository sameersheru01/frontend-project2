import React from 'react'
import styles from './Checkout.module.css' 
import { IoLocationSharp } from "react-icons/io5";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Restaurantbar from './restaurantbar';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
    const items = [
        { id: 1, name: "Royal Cheese Burger", price: 120, quantity: 1, image: "burger.jpg" },
        { id: 2, name: "Potato Veggies", price: 70, quantity: 1, image: "veggies.jpg" },
        { id: 3, name: "Coke Coca Cola", price: 40, quantity: 1, image: "coke.jpg" },
      ];
      const { cart,totalcost } = location.state || {};
      const address = "45, Green Street, Sector 12";
      const itemsTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
      const tax = 10;
      const grandTotal = itemsTotal + tax;
    // console.log(cart)
      return (
        <div className={styles.container}>
            <h2 className={styles.head}> <button><FaArrowLeft size={18}/></button> Your Order Details</h2>
        <div className={styles.orderContainer}>
          {/* Left Panel */}
          <div className={styles.orderDetails}>
            <div className={styles.orderList}>
              {cart.map((item) => (
                <div className={styles.orderItem} key={item.id}>
                  <img src={item.imgurl} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    <p>{item.quantity}x item</p>
                  </div>
                  <p className={styles.itemPrice}>₹{item.cost}</p>
                </div>
              ))}
            </div>
            <textarea className={styles.notes} placeholder="Add order notes"></textarea>
          </div>
    
          {/* Right Panel */}
          <div className={styles.orderSummary}>
            <div className={styles.del}>
            <div className={styles.deliveryAddress} onClick={()=>{navigate('/address')}} >
                <div className={styles.location} ><IoLocationSharp fill='#FC8A06'/></div>
              <div>
              <h4>Delivery Address</h4>
              <p>{address}</p>
              </div>
            </div>
            </div>
            <div className={styles.summaryTotals}>
              <div className={styles.summaryRow}>
                <span>Items</span>
                <span>₹{totalcost}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Sales Tax</span>
                <span>₹{tax}</span>
              </div>
            </div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Subtotal ({cart.length} items)</span>
                <spans>₹{totalcost + tax}</spans>
              </div>
            <button className={styles.paymentButton}>Choose Payment Method</button>
          </div>
        </div>
        {/* <div className={styles.resturants}> */}
            <Restaurantbar className={styles.resturants}/>
        {/* </div> */}
        </div>
      );
}
