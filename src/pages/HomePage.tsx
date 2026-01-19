import { useRecoilValue } from "recoil";
import { CartItemsAtom } from "../atoms/CartItemsAtom";
import Navbar from "../components/Navbar";
import ChooseCategories from "../sections/ChooseCategories";
import Footer from "../sections/Footer";
import HomepageEnding from "../sections/HomepageEnding";
import HomeWelcome from "../sections/HomeWelcome";
import Testimonial from "../sections/Testimonial";

import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [cartItems, setCartItems] = useState(useRecoilValue(CartItemsAtom));
  const [isSignedIn, setIsSignedIn] = useState(false);
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
    
  }, [setIsSignedIn]);

  return (
    <div>
      <Navbar theme="light" cartItems={cartItems.quantity} isSignedIn={isSignedIn} />
      <HomeWelcome />
      <ChooseCategories />
      <HomepageEnding />
      <Testimonial />
      <Footer />{" "}
    </div>
  );
}
export default HomePage;
