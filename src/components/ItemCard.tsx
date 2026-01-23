interface ItemProps {
  imageUrl: string;
  title: string;
  price: number;
  rating?: number;
  inStock?: boolean;
  quantity?: number;
  onAddToCart?: () => void;
  onIncreaseQuantity?: () => void;
  onDecreaseQuantity?: () => void;
}

function ItemCard(props: ItemProps) {
  const { imageUrl, title, price, rating = 0, inStock = true, quantity = 0, onAddToCart, onIncreaseQuantity, onDecreaseQuantity } = props;

  

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-gray-50">
        <img 
          src={imageUrl} 
          alt={title} 
          loading="lazy"
          className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          style={{ display: 'block' }}
        />
       
        
        {/* Stock Badge */}
        {!inStock && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md z-20">
            Out of Stock
          </div>
        )}
        {inStock && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md z-20">
            In Stock
          </div>
        )}
      </div>
      
      {/* Content Container */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg flex font-semibold text-gray-800 mb-1 line-clamp-1 min-h-[3.5rem]">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={star <= rating ? "#fbbf24" : "#e5e7eb"}
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-1">({rating.toFixed(1)})</span>
        </div>
        
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
              disabled={!inStock}
              className={`${
                inStock 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                inStock ? 'hover:scale-105 active:scale-95' : ''
              } shadow-sm hover:shadow-md flex items-center gap-2`}
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
