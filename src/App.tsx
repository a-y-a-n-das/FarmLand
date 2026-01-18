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


function App() {

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
