interface ItemProps {
  imageUrl: string;
  title: string;
  price: number;
  quantity?: number;
  onAddToCart?: () => void;
  onIncreaseQuantity?: () => void;
  onDecreaseQuantity?: () => void;
}

function ItemCard(props: ItemProps) {
  const { imageUrl, title, price, quantity = 0, onAddToCart, onIncreaseQuantity, onDecreaseQuantity } = props;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-gray-50">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      
      {/* Content Container */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>
        
        {/* Price and Button Container */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-green-700">
              ${price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-500">per unit</span>
          </div>
          
          {/* Add to Cart Button or Quantity Counter */}
          {quantity === 0 ? (
            <button 
              onClick={onAddToCart}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 4.5v15m7.5-7.5h-15" 
                />
              </svg>
              Add
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-green-50 rounded-full px-2 py-1.5 border border-green-200">
              <button
                onClick={onDecreaseQuantity}
                className="w-8 h-8 flex items-center justify-center bg-white hover:bg-green-600 hover:text-white text-green-600 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 font-bold"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={3} 
                  stroke="currentColor" 
                  className="w-4 h-4"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M5 12h14" 
                  />
                </svg>
              </button>
              
              <span className="text-green-700 font-bold text-lg min-w-[1.5rem] text-center">
                {quantity}
              </span>
              
              <button
                onClick={onIncreaseQuantity}
                className="w-8 h-8 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 font-bold"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={3} 
                  stroke="currentColor" 
                  className="w-4 h-4"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 4.5v15m7.5-7.5h-15" 
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ItemCard;
