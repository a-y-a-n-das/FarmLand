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
    <div className="scroll-bar-hide overflow-x-hidden">
      <Navbar theme="default" cartItems={Number(cartItems)} isSignedIn={isSignedIn} />
      <div className="h-90 flex justify-center relative overflow-hidden" >
        <img src="https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
        <h1 className="mb-4 mt-40 text-3xl font-bold text-heading md:text-5xl lg:text-6xl absolute">
          <span className="text-transparent bg-clip-text bg-white">
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
