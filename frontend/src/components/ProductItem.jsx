import React from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import "../css/Products.css"



const ProductItem = ({id,image,name,price,item}) => {
  
    const {currency} = useContext(ShopContext);
    return (
        <div className='product-item'>
        <Link style={{textDecoration:"none"}} to={`/product/${id}`}>
            <div className = "product-card">
                <img className="product-card-image" src={image[0]} alt="image" />            
                <div className='name'>{name}</div>
                <div className='currency'>{currency} <span>{price}</span></div>    
            </div>                       
        </Link>   
        </div>
    )
}

export default ProductItem
