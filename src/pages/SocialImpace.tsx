import { Leaf, Heart, Users, Sprout, Globe, Sun } from 'lucide-react';
import Navbar from '../components/Navbar';

const SocialImpact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-lime-50 to-emerald-50">

    <Navbar theme="dark" cartItems={3} isSignedIn={true} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-100 to-lime-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Leaf className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Our Social Impact
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Nurturing communities, protecting our planet, and celebrating the beauty of organic, sustainable living
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-green-200">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
              Growing Together for a Greener Tomorrow
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              We believe that every meal is an opportunity to make a positive impact. By choosing organic, 
              locally-sourced produce, we're not just nourishing our bodies—we're supporting farmers, 
              protecting ecosystems, and building a sustainable future for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Our Commitment to Nature
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Impact Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-green-400">
              <Sprout className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Organic Farming
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We partner with local organic farmers who use sustainable practices, avoiding harmful 
                pesticides and promoting soil health, biodiversity, and natural ecosystems.
              </p>
            </div>

            {/* Impact Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-lime-400">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Community Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By supporting small-scale farmers and local communities, we create economic opportunities 
                and strengthen food security while preserving traditional farming knowledge.
              </p>
            </div>

            {/* Impact Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-emerald-400">
              <Globe className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Environmental Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to organic produce reduces carbon footprint, protects water resources, 
                and helps combat climate change through sustainable agricultural practices.
              </p>
            </div>

            {/* Impact Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <Heart className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Health & Wellness
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Organic eating means nutrient-rich food free from synthetic chemicals, promoting better 
                health and wellness for our customers and their families.
              </p>
            </div>

            {/* Impact Card 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-lime-500">
              <Sun className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Sustainable Future
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're dedicated to creating a food system that works in harmony with nature, ensuring 
                that future generations can enjoy the same natural abundance we have today.
              </p>
            </div>

            {/* Impact Card 6 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-emerald-500">
              <Leaf className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Zero Waste Goals
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From eco-friendly packaging to composting programs, we're working towards minimizing 
                waste and creating a circular economy in our food system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-green-100 to-lime-100 rounded-xl p-6 shadow-md">
              <p className="text-5xl font-bold text-green-700 mb-2">500+</p>
              <p className="text-gray-700 font-medium">Local Farmers Supported</p>
            </div>
            <div className="text-center bg-gradient-to-br from-lime-100 to-emerald-100 rounded-xl p-6 shadow-md">
              <p className="text-5xl font-bold text-green-700 mb-2">10,000+</p>
              <p className="text-gray-700 font-medium">Acres of Organic Farmland</p>
            </div>
            <div className="text-center bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl p-6 shadow-md">
              <p className="text-5xl font-bold text-green-700 mb-2">50%</p>
              <p className="text-gray-700 font-medium">Reduction in Carbon Footprint</p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-100 to-lime-100 rounded-xl p-6 shadow-md">
              <p className="text-5xl font-bold text-green-700 mb-2">100%</p>
              <p className="text-gray-700 font-medium">Organic & Chemical-Free</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-200 to-lime-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-green-700 mb-8 leading-relaxed">
            Every choice you make matters. By choosing organic, you're voting for a healthier planet, 
            thriving communities, and a sustainable future. Together, we can cultivate positive change.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Start Your Organic Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialImpact;
