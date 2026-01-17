import logo from '../assets/farmlandLogo.svg';
import { useState, useEffect } from 'react';

interface props {
  theme: string,
  cartItems?: number,
  isSignedIn?: boolean
}

function Navbar(props: props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = props.cartItems || 0;
  const isSignIn = props.isSignedIn || false;
  const scroll = window.scrollY;
  
  useEffect(() => {
    const handleScroll = () => {
      if (scroll > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (props.theme === "dark") {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsScrolled, props, scroll]); 

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full h-18 pt-2 px-4 flex justify-between items-center transition-all duration-300 ${
          isScrolled 
            ? "bg-white text-black shadow-md" 
            : `bg-transparent ${props.theme === "light" ? "text-white" : "text-gray-800"}`
        } z-50`}
      >

        <div>
          <img
            src={logo}
            alt="Farm & Me Logo"
            className="h-40 w-auto"
            />
        </div>

        <div className='flex flex-col-5 justify-between items-center w-full '>

          <div className='col-span-2'></div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <a href="#" className="hover:underline transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Contact
            </a>
          </li>
        </ul>
        <div className='flex items-center' >
          <button className="relative mt-1 p-2 hover:opacity-80 transition cursor-pointer">
            {/* Shopping Cart Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" 
              />
            </svg>
            {/* Badge with item count */}
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </button>
          <div>
          <button className="ml-4  px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            {isSignIn ? "Account" : "Sign In"}
          </button>
          </div>
          
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
