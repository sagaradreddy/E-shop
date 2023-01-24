import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from './components/Cart'
import Home from './components/Home'
import ProductDetails  from './components/ProductDetails'
import Products from  "./components/Products"
import Menu from "./Header/Menu";
import Pnf from  "./Util/Pnf"







function App(){
  return(
    <Router>
      <Menu/>
      <ToastContainer autoClose={'4000'} position={'top-center'}/>

      <Routes>
        <Route path={`/`} element={<Home itemPerPage={8} />}/>
        <Route path={`/product/:catName`} element={<Products/>}/>
        <Route path={`/products/:id/category/:catName`} element={<ProductDetails/>}/>
        <Route path={`/cart`} element={<Cart/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </Router>
  )
}
export default App