import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";
import styles from './Product.module.css'
import axios from 'axios';
import {addtokentoheader} from './helper'
import Cart from './Cart';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product({cartvisble}) {
    const res = "Papa Johns";
    const location = useLocation();
    // const [cart,setCart] = useState(true)
    // const [resdata,setResData] = useState(location.state?.restaurant)
    const resdata = location.state?.restaurant;
    const [menu,setMenu] = useState([])
    const cards = [
        {backgroundimage:"https://res.cloudinary.com/diuif9frr/image/upload/v1732990345/food%20delivery/jtp4xjbvzmwuke8q7oil.png",des:"First Order Discount"},
        {backgroundimage:"https://res.cloudinary.com/diuif9frr/image/upload/v1732990345/food%20delivery/pvci9k5nzakhogy5t5t9.png",des:"Vegan Discount"},
        {backgroundimage:"https://res.cloudinary.com/diuif9frr/image/upload/v1732990345/food%20delivery/nxd1am2rluukhmqerpuc.png",des:"Free ice Cream Offer"}
    ]
    useEffect(() => {
        // console.log(res)
        const fetchData = async () => {
          try {
            // const headers = addtokentoheader({ headers: {} });
            const response = await axios.get(`http://localhost:5000/users/r/restaurants/${resdata.name}`);
            console.log(response.data.menu); 
            // setResData(response.data);
            setMenu(response.data.menu)
          } catch (error) {
            console.error('Error occurred while making the request:', error);
          }
        };
    
        // Call the async function
        fetchData();
      }, []);
      const handleSuccess = () => {
        // Display a success message
        toast.success("successfully added to cart!");
      };
       const Addtocart = async (item)=>{
        // const dat = {item.name,item}
         console.log(item); 
        try {
          const headers = addtokentoheader({ headers: {} });
          const response = await axios.post(`http://localhost:5000/users/r/addtocart`,item,{headers});
          if(response.status===200){
            handleSuccess()
          }
          // setResData(response.data);
          // setMenu(response.data.menu)
        } catch (error) {
          console.error('Error occurred while making the request:', error);
        }
       }
  return (
    <>
    <div className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          {/* Left Side: Restaurant Info */}
          <div className={styles.info}>
            <p className={styles.tagline}>I’m lovin’ it!</p>
            <h1 className={styles.title}>{resdata.name}</h1>
            <div className={styles.details}>
              <div className={styles.detail}>
                <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1732974988/food%20delivery/faqnhtsltj2gmdwdhpbh.png' />
                <span className={styles.detailText}>Minimum Order: 12 GBP</span>
              </div>
              <div className={styles.detail}>
                {/* <FaMotorcycle />     */}
                <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1732974988/food%20delivery/hb2lb3wevogst70xlysv.png' />
                <span className={styles.detailText}>Delivery in 20–25 Minutes</span>
              </div>
            </div>
            {/* <div className={styles.badge}>Open until 3:00 AM</div> */}
          </div>

          {/* Right Side: Food Image */}
          <div className={styles.imageContainer}>
            <img
                src='https://res.cloudinary.com/diuif9frr/image/upload/v1732975443/food%20delivery/nusgoigqnbhdtndhthpg.jpg'
              alt="McDonald's Food"
              className={styles.foodImage}
            />
            <div className={styles.ratingCard}>
              <h2 className={styles.rating}>3.4</h2>
              <p className={styles.stars}>⭐⭐⭐⭐</p>
              <p className={styles.reviews}>1,360 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuSearch}>
    <h2 className={styles.title2}>All Offers from {resdata.name}</h2>
      <div className={styles.searchbar}>
        <GoSearch className={styles.icon} />
        <input
          type="text"
          name="menu_Search"
          placeholder="Search from menu..."
          className={styles.input}
        />
      </div>
    </div>
    <div className={styles.nav}>        
        <span>Offers</span>
        <span>Burgers</span>
        <span>Fries</span>
        <span>Snacks</span>
        <span>Salads</span>
        <span>Happy Meal®</span>
        <span>Desserts</span>
        <span>Hot drinks</span>
        <span>Sauces</span>
        <span>Orbit®</span>
        {/* <span></span> */}
    </div>
    <div className={styles.content} >
        <div className={styles.bars}> 
        <div className={`${styles.cards} ${cartvisble && styles.cartcards}`}>
    {cards.map((data)=><div
      className={styles.card}
      style={{ backgroundImage: `url(${data.backgroundimage})` }}
    >
        <div>
        <p className={styles.companyname} > {resdata.name} </p>
        <p className={styles.discount} >{data.des}</p>
        </div>
        <div className={styles.add}>
            <button>+</button>
        </div>
    </div>)}
    </div>
    <div>
        {menu.map((data)=>(<div className={styles.dishes}>
            <h2>{data.category}</h2>
            <div className={`${styles.items} ${cartvisble && styles.visbleitems}`}>
                {data.items.map((item)=>(<div className={styles.item}>
                    <div className={styles.itemdetails} >
                    <p className={styles.itemname} >{item.name}</p>
                    <p className={styles.des}>{item.description}</p>
                    <p className={styles.cost}>₹{item.cost}</p>
                    </div>
                    <div className={styles.itemimg} style={{ backgroundImage: `url(${item.imgurl})`}}>
                    {/* <img src={item.imgurl} className={styles.itemimg} /> */}
                    <div className={styles.add} onClick={()=>Addtocart(item)}>
                        <button>+</button>
                    </div>
                    </div>
                </div>))}
            </div>
            </div>))}
    </div>
        </div>
        {cartvisble && <div className={styles.cart}>
            <Cart/>
        </div>}
    </div>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="colored"
      />
    </>
    
  )
}
