import { useRecoilValue } from "recoil";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ItemsSection from "../sections/ItemsSection";
import Footer from "../sections/Footer";
import { CartItemCountAtom, SignInAtom } from "../atoms/UserAtom";

function Shop() {
    const cartItems = useRecoilValue(CartItemCountAtom);
    const isSignedIn = useRecoilValue(SignInAtom);

  return (
    <div>
      <Navbar theme="default" cartItems={Number(cartItems)} isSignedIn={isSignedIn} />
      <div className="bg-green-500 h-90 flex justify-center">
        <h1 className="mb-4 mt-40 text-3xl font-bold text-heading md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-300">
            We deliver straight from farms
          </span>
        </h1>
      </div>
      <div className="mt-10">
        <SearchBar/>
        </div>
        <div>
            <ItemsSection   />      
      </div>

    <Footer />
    </div>
  );
}

export default Shop;
