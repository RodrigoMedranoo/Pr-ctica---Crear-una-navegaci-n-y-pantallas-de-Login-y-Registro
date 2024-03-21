import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import Page404 from './Page404';
import Navbar from './components/Navbar';
import About from './views/About';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Product from './views/Product';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/" element={<Page404/>}/>
    </Routes>
    </>
);
}
export default App
