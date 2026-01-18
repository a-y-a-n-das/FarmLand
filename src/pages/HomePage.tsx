import { useRecoilValue } from "recoil";
import { CartItemsAtom } from "../atoms/CartItemsAtom";
import Navbar from "../components/Navbar";
import ChooseCategories from "../sections/ChooseCategories";
import Footer from "../sections/Footer";
import HomepageEnding from "../sections/HomepageEnding";
import HomeWelcome from "../sections/HomeWelcome";
import Testimonial from "../sections/Testimonial";

function HomePage() {
    const cartItems = useRecoilValue(CartItemsAtom);

  return (
    <div>
      <Navbar theme="light" cartItems={cartItems.quantity} isSignedIn={true} />
      <HomeWelcome />
      <ChooseCategories />
      <HomepageEnding />
      <Testimonial />
      <Footer />{" "}
    </div>
  );
}
export default HomePage;
