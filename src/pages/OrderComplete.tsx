import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function OrderComplete() {
  const navigate = useNavigate();

  const handleViewOrders = () => {
    navigate('/order-history');
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        {/* Success Animation Container */}
        <div className="text-center">
          {/* Success Icon */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute w-32 h-32 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative w-32 h-32 bg-green-600 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="text-white" size={64} strokeWidth={3} />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your order! 🎉
          </p>
          <p className="text-lg text-gray-500 mb-8">
            We've received your order and will deliver fresh farm products straight to your door.
          </p>

          {/* Order Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-100">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Package className="text-green-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">What's Next?</h2>
            </div>
            
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Order Confirmation</h3>
                  <p className="text-sm text-gray-600">
                    You'll receive a confirmation email with your order details shortly.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Preparing Your Order</h3>
                  <p className="text-sm text-gray-600">
                    Our farmers will handpick the freshest products for you.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Your order will be delivered within 2-3 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleViewOrders}
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <Package size={24} />
              View Order History
              <ArrowRight size={24} />
            </button>
            
            <button
              onClick={handleContinueShopping}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-green-700 border-2 border-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              <Home size={24} />
              Continue Shopping
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{' '}
              <a href="mailto:support@farmland.com" className="text-green-600 hover:text-green-700 font-semibold">
                support@farmland.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderComplete;
