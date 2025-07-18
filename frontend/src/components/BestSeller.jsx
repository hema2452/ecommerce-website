import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import "../css/bestSeller.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestSellerData = products.filter((item) => item.bestseller === true);
    setBestSeller(bestSellerData.slice(0, 4));
  }, []);

  return (
    <div className="best-seller">
      <div className="best-seller-component">
        <Title text1={"Best"} text2={"Sellers"} />
        <p>Out Best Sellers Choice </p>
      </div>
      <div className="bestseller-container">
        {bestSeller.map((item, index) => (
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

export default BestSeller;
