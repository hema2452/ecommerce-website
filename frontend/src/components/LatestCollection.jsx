import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import "../css/LatestCollection.css";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="latest-collection">
      <Title text1={"Latest"} text2={"COLLECTIONS"} />
      <p className="para">Our's new added Products,Fresh Arrival</p>
      <div className="latest-product-images">
        { latestProducts.map((item, index) => (
          <ProductItem 
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
