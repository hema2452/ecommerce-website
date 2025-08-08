import React, { useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import "../css/Collection.css";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { useNavigate, useParams } from "react-router-dom";

const Collection = () => {
  const { products,search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [collection,setCollection] = useState([]);
  const[category, setCategory] = useState([]);
  const[subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant")

  
    
  // useEffect(()=>{console.log(category)},[category])
  // useEffect(()=>{console.log(subcategory)},[subcategory])

  const handleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const handleSubCategory = (e) => {
    if(subcategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item!== e.target.value ))       
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(search != null){         
      let newSearch = search.toLowerCase().trim()
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(newSearch))

    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));               
    }
    
    if(subcategory.length> 0){
       productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));      
    }
    setCollection(productsCopy);  
  }

  const sortProduct = () => {
    const filterCopy = collection.slice();

    switch(sortType){
      case "low-high":
        setCollection(filterCopy.sort((a,b) => (a.price - b.price)));
        console.log(filterCopy.slice(0,5))
        break;
      case "high-low":
        setCollection(filterCopy.sort((a,b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>applyFilter(), [category,subcategory,search, showSearch])
  useEffect(() =>{
    sortProduct()
  },[sortType])

  const navigateProduct = useNavigate()

  const handleClick = () =>{
      navigateProduct(`/product/:${id}`)
  }


  return (
    <div>

 
    <div className="collection">
      <div className="left-collection">
        <p className="filter">
          Filter
          <img
            src={assets.dropdown_icon}
            onClick={() => setShowFilter(!showFilter)}
            alt="dropdown-icon"
          />
        </p>
        <div className={showFilter ? `filter-by-section` : `showFilterBox`}>
          <p>
            <input type="checkbox" name="men" id="men" value={"Men"} onChange={handleCategory} /> MEN
          </p>
          <p>
            <input type="checkbox" name="women" id="women" value={"Women"} onChange={handleCategory} />
            WOMEN
          </p>
          <p>
            <input type="checkbox" name="kids" id="kids" value={"Kids"} onChange={handleCategory} />
            Kids
          </p>
        </div>
        <div className={showFilter ? `filter-by-section` : `showFilterBox`}>
          <p> <input type="checkbox" name="causals" id="causals" value = {"Winterwear"} onChange={handleSubCategory} /> WINTER WEAR </p>
          <p> <input type="checkbox" name="bottom-wear" id="bottom-wear" value = {"Bottomwear"} onChange={handleSubCategory} /> BOTTOM WEAR </p>
          <p> <input type="checkbox" name="top-wear" id="top-wear" value={"Topwear"} onChange={handleSubCategory}/> TOP WEAR </p>
        </div>
      </div>
      <div className="total-collection-container">
        <div className="title">
          {
            <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          }
          <select onChange={(e)=> setSortType(e.target.value)}className="sort-options">
            <option value={"relevant"}>Relevant</option>
            <option value={"low-high"}>Low to High</option>
            <option value={"high-low"}>High to Low</option>
          </select>       
        </div>
        <div className="total-collection">
            {
            collection.map((item,index) => (<ProductItem 
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              item={item}
           
            />))
        }
        </div>            
      </div>
       
    </div>

    </div>
  );
};

export default Collection;
