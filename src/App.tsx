import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Shop from './pages/Shop'
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import OrderComplete from './pages/OrderComplete';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Signin from './pages/Signin';
import axios from 'axios';
import { useEffect } from 'react';
import {  useSetRecoilState } from 'recoil';

import { CartItemCountAtom, SignInAtom } from './atoms/UserAtom';

axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
axios.defaults.withCredentials = true;

function App() {
  const setCartItems = useSetRecoilState(CartItemCountAtom);
  const setIsSignedIn = useSetRecoilState(SignInAtom)
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("/user/getuser", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (response.status === 200) {
          setIsSignedIn(true);
          setCartItems(response.data.user?.cartItems.length);
        }
      } catch (error) {
        console.log(error);
        setIsSignedIn(false);
      }
    };
    getUser();
    
  }, [setIsSignedIn, setCartItems]);

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/order-complete" element={<OrderComplete />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </BrowserRouter>



    </>
  )
}

export default App
