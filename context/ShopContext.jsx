import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import {toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [placedOrderItems, setPlacedOrderItems] = useState(0)
  const  navigate = useNavigate();

  const addToCart = async (itemId, itemSize) => {
    let cartData = structuredClone(cartItems);
    

    if(itemSize === null || itemSize === undefined){
        toast.error("Please select size")

    }

    else{
        
        if (cartData[itemId]) {
        if (cartData[itemId][itemSize]) {
            cartData[itemId][itemSize] += 1;
            setPlacedOrderItems(prev => prev+1)
        } else {
            cartData[itemId][itemSize] = 1;
            setPlacedOrderItems(prev => prev+1)
        }
        } else {
        cartData[itemId] = {};
        cartData[itemId][itemSize] = 1;
        setPlacedOrderItems(prev => prev+1)

        }
        setCartItems(cartData);
        
    };


    }

    const updateCartQuantity = (itemId,size,quantity,itemIdQuantity) => {
        let updateCartValue = structuredClone(cartItems);             
        let finalValue = Number(quantity) - Number(itemIdQuantity);
        updateCartValue[itemId][size] = quantity;
        setPlacedOrderItems(prev => Number(prev) + finalValue)
        setCartItems(updateCartValue)        
    }

    const deleteProduct = (itemId, size, quantity,itemQuantityValue) => {   
      let updateCart = structuredClone(cartItems);
      updateCart[itemId][size] = quantity;
      setCartItems(updateCart)             
      setPlacedOrderItems(prev => Number(prev) - Number(itemQuantityValue));
          
    }

    const getCartAmount = () => {
      let TotalAmount = 0;
      for(const items in cartItems){
        // console.log(cartItems)
          // console.log(items) using to get item id from the cartitems and next line we are finding the product from products
          let itemInfo = products.find((product) => product._id  === items);
          for(const item in cartItems[items]){
            try{
              if(cartItems[items][item] > 0){
                TotalAmount += itemInfo.price * cartItems[items][item]
                }
            }
            catch(error){
              
            }

          }

          return TotalAmount
          
      }
    }
  // useEffect(()=>{
  //   console.log(cartItems)
  // },[cartItems])
  
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart, 
    placedOrderItems,
    deleteProduct,
    setPlacedOrderItems,
    updateCartQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
