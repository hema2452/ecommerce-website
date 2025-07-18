import React, { useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import '../css/SearchComponent.css'
import { useLocation } from 'react-router-dom'


const SearchComponent = () => {
  const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  const showLocation = useLocation();
  const [visible, setVisible] = useState(false);  

    useEffect(()=>{
      if(location.pathname.includes("collection") && showSearch){
        setVisible(true)
  
      }
      else{
        setVisible(false)
      }
    } ,[showLocation])


  return (
    <div>
      {visible && <input type="text"  onChange={(e)=>setSearch(e.target.value)} className={showSearch ? "show-search" : "hide-search" }/>}
    </div>
  )
}

export default SearchComponent
