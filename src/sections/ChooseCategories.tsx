import vegetablesImg from '../assets/vegetables.png';
import dairyImg from '../assets/dairy.png';
import meatImg from '../assets/meat.png';
import farmgoodsImg from '../assets/farmgoods.png';

const categories = [
  {
    id: 1,
    name: 'Fruits & Vegetables',
    image: vegetablesImg,
    path: '/category/fruits-vegetables'
  },
  {
    id: 2,
    name: 'Dairy',
    image: dairyImg,
    path: '/category/dairy'
  },
  {
    id: 3,
    name: 'Meat & Fish',
    image: meatImg,
    path: '/category/meat-fish'
  },
  {
    id: 4,
    name: 'Farm Goods',
    image: farmgoodsImg,
    path: '/category/market-goods'
  }
];

const ChooseCategories = () => {
  const handleCategoryClick = (path: string) => {
    // Handle navigation or filtering
    console.log('Navigate to:', path);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: 'cursive' }}>
          Choose Your Category
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.path)}
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
            >
              <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center mb-4 hover:shadow-lg transition-shadow overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-center font-medium text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseCategories;
