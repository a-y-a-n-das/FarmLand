import { useRecoilValue } from "recoil";
import Navbar from "../components/Navbar";
import ChooseCategories from "../sections/ChooseCategories";
import Footer from "../sections/Footer";
import HomepageEnding from "../sections/HomepageEnding";
import HomeWelcome from "../sections/HomeWelcome";
import Testimonial from "../sections/Testimonial";
import { CartItemCountAtom, SignInAtom } from "../atoms/UserAtom";
import { Analytics } from "@vercel/analytics/next"




function HomePage() {
  const cartItemCount= useRecoilValue(CartItemCountAtom);
  const isSignedIn = useRecoilValue(SignInAtom);

  return (
    <div>
      <Analytics />
      <Navbar theme="light" cartItems={Number(cartItemCount)} isSignedIn={isSignedIn} />
      <HomeWelcome />
      <ChooseCategories />
      <HomepageEnding />
      <Testimonial />
      <Footer />{" "}
    </div>
  );
}
export default HomePage;
