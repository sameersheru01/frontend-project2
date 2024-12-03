import React, { useEffect, useState } from 'react';
import { LuShare2 } from "react-icons/lu";
import { IoTrashBin } from "react-icons/io5";
// import { FaArrowCircleDown } from "react-icons/fa";
// import { FaArrowCircleRight } from "react-icons/fa";
import styles from './Cart.module.css'
import axios from 'axios';
import { addtokentoheader } from './helper';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const [cart,setCart]=useState([])
    const [totalcost,setTotalcost]=useState()
    const [userid,setUserid]=useState()
    const total= {Subtotal:250, Discounts:-3,Deliveryfee:3 }
    const [activeIndex, setActiveIndex] = useState(0);
    const delivery= [
        {image:"https://res.cloudinary.com/diuif9frr/image/upload/v1733134144/food%20delivery/y6ukeuagcwvmihm3ejf5.png",type:"Delivery",time:"Starts at 17:50"},
        {image:"https://res.cloudinary.com/diuif9frr/image/upload/v1733134145/food%20delivery/zc9ss8gorcrawmqsjr88.png",type:"Collection",time:"Starts at 16:50"}
    ]
    const navigate = useNavigate();

    const fetchData = async () => {
      try {
        const headers = addtokentoheader({ headers: {} });
        const response = await axios.get(`http://localhost:5000/users/r/viewcartbyid`,{headers});
        console.log(response.data); 
        setUserid(response.data.cart.userId);
        setCart(response.data.cart.items);
        setTotalcost(response.data.totalCost)
      } catch (error) {
        console.error('Error occurred while making the request:', error);
      }
    };
    useEffect(() => {
      // console.log(res)
  
      // Call the async function
      fetchData();
    }, []);
    const checkout = ()=>{
      navigate("/checkout", { state: { cart: cart, totalcost:totalcost } });
    }
    const handleRemoveItem = async (itemName) => {
      try {
          // API call to remove item by name
          const response = await axios.delete(`http://localhost:5000/users/r/removefromcart`, {
              data: { name: itemName,userId:userid }  // Send item name in the request body
          });
  
          if (response.status === 200) {
              // After successfully removing the item, update the cart in state
              setCart(prevCart => prevCart.filter(item => item.name !== itemName));
  
              // Update the total cost
              setTotalcost(response.data.totalCost);  // Assuming the server returns the updated total cost
              console.log("done")
              fetchData()
          }
      } catch (error) {
          console.error('Error occurred while removing item:', error);
      }
  };
  
  return (
    <div className={styles.Cart}> 
        <div className={styles.sharesection}>
              <LuShare2 size={32} />
              <p>Share this cart<br/> with your friends</p>
              <button>Copy Link</button>
        </div>
        <div>
            <div className={styles.basket}>
                <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733117650/food%20delivery/i24kdaq7nuq8lbc6wgl1.png' />
                <p>My Basket</p>
            </div>

            {cart.map((data,index)=>(<div className={styles.item} key={index} >
                <div className={styles.div}><div className={styles.quantity}>{data.quantity}x</div></div>
                <div className={styles.details}>
                <p className={styles.price}>₹{data.cost}</p>
                <p className={styles.name}>{data.name}</p>
                <p className={styles.des}>{data.description}</p>
                </div>
                <button><IoTrashBin size={30} onClick={()=>handleRemoveItem(data.name)}/></button>
            </div>))}
            <div className={styles.billing}>
                <div className={styles.Subtotal}>Sub Total: <p>₹{totalcost}</p></div>
                <div className={styles.Discounts}>Discounts: <p>{total.Discounts}</p></div>
                <div className={styles.Deliveryfee}>Delivery Fee: <p>{total.Deliveryfee}</p></div>
            </div>
            <div className={styles.totaldelivery}>
                <div className={styles.total}>
                <div className={styles.Subtotal}>Total to pay <p>₹{totalcost}</p></div>
                </div>
                <div className={styles.coupon}>Choose your free item..<p><img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733134144/food%20delivery/dacjguqghpn4my6hwlfv.png' /></p></div>
                <div className={styles.coupon}>Apply Coupon Code here<p><img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733134145/food%20delivery/jq1pdrzgl5ddff1ctcsv.png'/></p></div>

            </div>
            
           <div className={styles.delivery}> 
           {delivery.map((item, index) => (
        <div
          key={index}
          className={`${styles.deliveryCard} ${
            activeIndex === index ? styles.active : ""
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <img src={item.image} alt={item.type} className={styles.deliveryImage} />
          <div className={styles.deliveryInfo}>
            <h3>{item.type}</h3>
            <p>{item.time}</p>
          </div>
        </div>
      ))}
             </div>
        <div className={styles.checkout} onClick={checkout}>
            <img src='https://res.cloudinary.com/diuif9frr/image/upload/v1733134144/food%20delivery/v9q98vbggjhtezud5zam.png'/>
            <p>Checkout!</p>
        </div>

        
        </div>
    </div>
  )
}
