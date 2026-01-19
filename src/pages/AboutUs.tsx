import { useRecoilValue } from 'recoil';
import { CartItemCountAtom, SignInAtom } from '../atoms/UserAtom';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const AboutUs = () => {
  const cartItems = useRecoilValue(CartItemCountAtom);
  const isSignedIn = useRecoilValue(SignInAtom);
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar theme='default' cartItems={Number(cartItems)} isSignedIn={isSignedIn} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r mt-10 from-green-600 to-green-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to FarmLand</h1>
          <p className="text-xl mb-8">Cultivating Tomorrow, Harvesting Today</p>
          <p className="text-lg max-w-3xl mx-auto">
            We're dedicated to sustainable farming practices that nurture the earth 
            while providing the highest quality produce for communities worldwide.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-green-600 text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Sustainable</h3>
            <p className="text-gray-700">
              We practice eco-friendly farming methods that preserve our land for future generations.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-green-600 text-4xl mb-4">🚜</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Modern Tech</h3>
            <p className="text-gray-700">
              Combining traditional wisdom with cutting-edge agricultural technology.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-green-600 text-4xl mb-4">🌾</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Quality Produce</h3>
            <p className="text-gray-700">
              From our fields to your table, ensuring the freshest and healthiest products.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-green-200">Acres Farmed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-green-200">Crop Varieties</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-green-200">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-green-200">Years Experience</div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Founded in 1998, FarmLand began with a simple vision: to create a farm that 
              respects nature while feeding communities. What started as a small family 
              operation has grown into a thriving agricultural enterprise.
            </p>
            <p>
              Today, we manage over 500 acres of fertile land, growing everything from 
              organic vegetables to grains and fruits. Our commitment to sustainable 
              practices means we use crop rotation, natural pest control, and water 
              conservation techniques.
            </p>
            <p>
              We believe in transparency and invite our community to visit, learn, and 
              experience the journey from seed to harvest. Join us in building a greener, 
              healthier future for all.
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Learn More?</h3>
          <p className="text-lg mb-8">Visit our farm or get in touch with our team</p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
            Contact Us
          </button>
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
