import {useContext, useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import {assets} from "../assets/frontend_assets/assets"
import '../css/NavBar.css'
import SearchComponent from './searchComponent'
import { ShopContext } from '../context/ShopContext'

const NavBar = () => {
  const [visible,setVisible] = useState(false)
  // const {search, setSearch, showSearch, setShowSearch,placedOrderItems} = useContext(ShopContext)
  const{search,setSearch, showSearch, setShowSearch, placedOrderItems}  = useContext(ShopContext)
  const hideShowSearchbar = () => {
    // console.log("it is clicked")
    setShowSearch(prev => !prev)
    // console.log(search)
  }

  return (
    <div className = "navbar">
      <Link to="/">
              <img src={assets.logo} alt="Logo" className='logo'/>
      </Link>    
        <ul className='menu-items'>
            <NavLink className="list-item" to="/">Home</NavLink>
            <NavLink className="list-item" to="/collection">Collections</NavLink>
            <NavLink className="list-item" to="/about">About</NavLink>            
            <NavLink className="list-item" to="/contact">Contact</NavLink>
        </ul>
        {/*css property to add --- for small screen it is hidden about sm(small screens) it should be flex */}
        <SearchComponent/>
        <div className='icons-list'>          
          <img src={assets.search_icon} alt="search-icon"  className='icon' onClick = {hideShowSearchbar}/>
          <div className='profile-container'>
            <Link to="/login"> <img src={assets.profile_icon} alt="profile-icon" className='profile-image icon'/> </Link>
            <div className="profile-icon">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          </div>
          <Link to="/cart" style={{textDecoration:"none"}}>
              <img src={assets.cart_icon} alt="cart-icon" className='icon icon-container' />
              <p className='total-items-order'>{placedOrderItems}</p>
          </Link>
          <img onClick={ () => setVisible(true)} src={assets.menu_icon} className='menu-icon icon'/>               
        </div>
        <div className={`${visible ? "small-screen-navbar" : "no-small-screen-navbar" }`}>
          <div onClick ={() => setVisible(false)} className='toggle-icon'>
            <img src={assets.cross_icon}/>
            <div>Back</div>
          </div>
            <NavLink onClick={()=>setVisible(false)} className="toggle-item" to="/">Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="toggle-item" to="/collection">Collections</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="toggle-item" to="/about">About</NavLink>            
            <NavLink onClick={()=>setVisible(false)} className="toggle-item" to="/contact">Contact</NavLink>


        </div>
                      
    </div>
  )
}

export default NavBar
