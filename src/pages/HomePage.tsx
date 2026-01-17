import Navbar from "../components/Navbar";
import ChooseCategories from "../sections/ChooseCategories";
import Footer from "../sections/Footer";
import HomepageEnding from "../sections/HomepageEnding";
import HomeWelcome from "../sections/HomeWelcome";
import Testimonial from "../sections/Testimonial";

function HomePage() {
  return (
    <div>
      <Navbar theme="light" cartItems={3} isSignedIn={true} />
      <HomeWelcome />
      <ChooseCategories />
      <HomepageEnding />
      <Testimonial />
      <Footer />{" "}
    </div>
  );
}
export default HomePage;
