import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrders from "./pages/PlaceOrders"
import Orders from "./pages/Orders"

const App = () => {
  return (
    
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="product/:productId" element={<Product/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrders/>}/>
        <Route path = "/orders" element = {<Orders/>}/>        
      </Routes>    
    </div>
  )
}

export default App
