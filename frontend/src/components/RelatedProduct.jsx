import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import "../css/relatedCollection.css"
import Title from "./Title"

const RelatedProduct = ({category, subCategory}) => {
  // console.log(category,subCategory)
  const [itemCategory, setItemCategory]  = useState(false)
  const {products} = useContext(ShopContext)
  let filterData = products.filter(item => item.category == category)
  filterData = filterData.filter((item) => item.subCategory === subCategory)

  useEffect(()=>{
       setItemCategory(filterData.slice(0,3))
  } , [products])

  return (
    <div>
      <Title text1="Related" text2="Products" />
      <div className='related-collection'>
        {itemCategory ? itemCategory.map((item,index) => <ProductItem  key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                item={item}/> ) :<p>No data</p>}
      </div>
    </div>
 
  )
}

export default RelatedProduct
