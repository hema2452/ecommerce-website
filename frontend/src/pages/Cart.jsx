import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import "../css/Cart.css";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, cartItems, currency,deleteProduct,updateCartQuantity,navigate} = useContext(ShopContext);
  const [cartPage, setCartPage] = useState([]); 
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const itemSize in cartItems[itemId]) {
        // console.log(cartItems[itemId][itemSize])
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
    // console.log(cartItems)
    // console.log(tempData)
    setCartPage(tempData);
  }, [cartItems]);
  return (
    <div>
      <Title text1="Cart" text2="Items" />
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
                  <span className="item-size">{itemId.size}</span>
                </div>
              </div>
            </div>
            <input type="number" min={1} defaultValue= {itemId.quantity} onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateCartQuantity(itemId._id, itemId.size, Number(e.target.value),itemId.quantity)}  />
            <button onClick={() => deleteProduct(itemId._id, itemId.size, 0, itemId.quantity)}>
              <img className="bin-icon" src={assets.bin_icon} alt="Bin-icon" />
            </button>
        </div>
        );
      })}
      <div >
        <CartTotal/>
      </div>
      <div>
        <button className="checkout-button" onClick={() => navigate('/place-order')}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
