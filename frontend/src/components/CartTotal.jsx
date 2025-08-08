import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);
  return (
    <div>
        <div className='cart-total-title'>
            <Title text1={"CART"} text2={"TOTAL"}/>
        </div>   
        <div className="total-container">
            <div>
                <p>SubTotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div>
                <p>Total</p>
                <p>{currency} {getCartAmount() === undefined ? 0 : getCartAmount() + delivery_fee}.00 </p>
            </div>            
        </div>    
    </div>
  )
}

export default CartTotal
