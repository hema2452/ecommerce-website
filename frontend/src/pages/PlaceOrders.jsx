import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import "../css/PlaceOrder.css";
import { assets } from "../assets/frontend_assets/assets";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const PlaceOrders = () => {
  const [color, setColor] = useState("cashondelivery");
  const {navigate} =  useContext(ShopContext)
  return (
    <div>
      <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      <div className="place-order">
        <div>
          <div>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First name"
            />
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last name"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <input type="text" name="street" id="street" placeholder="Street" />
          <div>
            <input type="text" name="city" id="city" placeholder="city" />
            <input type="text" name="state" id="state" placeholder="state" />
          </div>
          <div>
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder="zipcode"
            />

            <input
              type="text"
              name="country"
              id="country"
              placeholder="country"
            />
          </div>
          <input type="tel" name="mobile" id="mobile" placeholder="Phone" />
        </div>
        <div>
          <CartTotal />
          <div>
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className="payment-options">
              <div className="payment-container">
                <div className={`payment-selection-div ${color ==="stripe" ? "color" :""}`} onClick={() => setColor("stripe")}></div>
                <img src={assets.stripe_logo} alt="stripe_logo" />
              </div>
              <div className="payment-container">
                <div className={`payment-selection-div ${color ==="razopay" ? "color" :""}`} onClick={() => setColor("razopay")}></div>
                <img src={assets.razorpay_logo} alt="razopay_logo" />
              </div>
              <div className="payment-container">
                <div className={`payment-selection-div ${color === "cashondelivery" ? "color" :""}`} onClick={() => setColor("cashondelivery")}></div>
                <div>Cash On Delivery</div>
              </div>
              
            </div>
            <button onClick={() => navigate("/orders")}>PLACE ORDER</button>
          </div>
        </div>
      </div>
      <div>
    
      </div>
    </div>
  );
};

export default PlaceOrders;
