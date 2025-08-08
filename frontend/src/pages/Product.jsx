import React, { useContext, useEffect, useState } from "react";
import { assets, products } from "../assets/frontend_assets/assets";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import "../css/ProductDisplay.css";
import RelatedProduct from "../components/RelatedProduct";



const Product = () => {
  const { productId } = useParams();
  const { products,addToCart } = useContext(ShopContext); // fetching the products data
  const [productsData, setProductsData] = useState(false); // state variable to store product data
  // const selectedProduct = products.filter((item) => item._id === productId)
  const [image, setImage] = useState("");
  const [size, setSize] = useState();

  const changeSize = (item) => {
    setSize(item);
  };

  // useEffect(() => console.log(size), [size]);
  // function is loaded when component is loaded
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductsData(item);
        setImage(item.image[0]);
        // break
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return (
    <div>
      {productsData ? (
        <div>
          <div className="products-data">
            <div className="product-image-container">
              <div className="product-display-images">
              {productsData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} />
              ))}
            </div>
            <div>
              <img src={image} alt="" className="image-full"/>
            </div>

            </div>
        
            <div className="products-data-container">
              <p>{productsData.name}</p>
              <div className="rating">
                <span>
                  <img src={assets.star_icon} alt="" className="start-icon" />
                </span>
                <span>
                  <img src={assets.star_icon} alt="" className="start-icon" />
                </span>
                <span>
                  <img src={assets.star_icon} alt="" className="start-icon" />
                </span>
                <span>
                  <img src={assets.star_icon} alt="" className="start-icon" />
                </span>
                <span>
                  <img
                    src={assets.star_dull_icon}
                    alt=""
                    className="start-icon"
                  />
                </span>
                <p>(122)</p>
              </div>
              <div className="product-description">
                {productsData.description}
                <div>
                  <p>Select Size</p>
                  <div>
                    {productsData.sizes.map((item, index) => (
                      <button
                        key={index}
                        className={`button-color ${
                          item === size ? "border-color" : "no-border"
                        }`}
                        onClick={() => changeSize(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <button className="button" onClick={() => addToCart(productsData._id, size)}>ADD TO CART</button>
                <hr className="horizontal" />
                <div className="policies">
                  <p>100% Original Product</p>
                  <p>Cash on delivery is available on this product</p>
                  <p>Easy return and exchange policy within 7 days</p>
                </div>
              </div>
            </div>
          </div>
          {/* ---product-reviews-container */}
          <div className="description-review-tab">
            <div className="border-description">
              <span>Description</span>
              <span>Reviews(122)</span>
            </div>
            <div className="description">
              <p>
                An e-commerce website is an online platform that facilitates
                that buying and selling Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Inventore, voluptate eligendi maiores, natus
                et recusandae soluta, sed exercitationem maxime necessitatibus
                ullam consequuntur praesentium deleniti cumque sunt
                voluptatibus. Aspernatur eligendi fugiat assumenda nisi,
                voluptatem, aperiam dolorum, a nemo optio voluptates vero
                perspiciatis. Eum ratione aliquam molestiae praesentium
                recusandae! Illum incidunt nulla labore nemo impedit veniam?
                Vero pariatur animi totam, ipsa optio harum magnam eos iste
                eaque!
              </p>
              <p>
                E-commerce wensite typically display products or services along
                with detailed descriptions,images,prices, Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Autem quia, inventore iure
                consequuntur dignissimos nulla sed neque sunt molestias
                laudantium accusamus totam hic quis eius?
              </p>
            </div>
          </div>
          <RelatedProduct category = {productsData.category} subCategory={productsData.subCategory}/>
        </div>
      ) : (
        <div></div>
      )}
 
    
    </div>
  );
};

export default Product;
