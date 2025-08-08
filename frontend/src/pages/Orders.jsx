import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const Orders = () => {
  const { products, cartItems, currency} = useContext(ShopContext);
  const today = new Date()
  // let newDate = today.getDate()
  // const addDays = Math.floor((Math.random()*6)+1)
  // console.log(addDays+newDate)
  today.setDate(today.getDate() + 5)
  const deliveryOrderDate = `${String(today.getDate()).padStart(2,"0")}/${String(today.getMonth()).padStart(2,"0")}/${String(today.getFullYear()).padStart(2,"0")}`

  const [cartPage, setCartPage] = useState([]); 
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const itemSize in cartItems[itemId]) {
        if (cartItems[itemId][itemSize] > 0) {
          let quantity = cartItems[itemId][itemSize]
          tempData.push({
            _id: itemId,
            size: itemSize,
            quantity:quantity
          });
        }
        
      }
    }
    setCartPage(tempData);
  }, [cartItems]);
  return (
    <div>
      <Title text1="ORDERED" text2="ITEMS" />
      {cartPage.map((itemId, index) => {
        let cartProducts = products.find((item) => item._id === itemId._id);
        return (
          <div key={index} className="cart-items">
            <div className="cart-image">
              <img src={cartProducts.image[0]} alt={cartProducts.name} />
              <div className="cart-products-items">
                <p>{cartProducts.name}</p>
                <div>
                  <span>
                    {currency}
                    {cartProducts.price}
                  </span>
                  <span className="item-size">Size: {itemId.size}</span>
                  <span>Quantity {itemId.quantity}</span>
                  <br />
                  <span>Delivery Date: {deliveryOrderDate}</span>
                  
                </div>
              </div>
            </div>   
            <div>
              <span></span>
              Ready to ship
              <button>Track Order</button>
            </div>      
        </div>
        );
      })}
      </div>)
}

export default Orders
