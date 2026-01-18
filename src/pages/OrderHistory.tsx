import { useRecoilValue } from 'recoil';
import { OrderHistoryAtom, type Order } from '../atoms/OrderHistoryAtom';
import Navbar from '../components/Navbar';
import { Package, Calendar, CheckCircle, Clock, ChevronDown, ChevronUp, LogOut } from 'lucide-react';
import { useState } from 'react';
import { CartItemsAtom } from '../atoms/CartItemsAtom';
import Footer from '../sections/Footer';

function OrderHistory() {
  const orders = useRecoilValue(OrderHistoryAtom);
  const [expandedOrders, setExpandedOrders] = useState<number[]>([]);
    const cartItems = useRecoilValue(CartItemsAtom);


  const toggleOrderExpansion = (orderId: number) => {
    setExpandedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isExpanded = (orderId: number) => expandedOrders.includes(orderId);

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logout clicked');
    // You can add: clear auth tokens, redirect to login, etc.
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar theme="default" cartItems={cartItems.quantity} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Package className="text-green-600" size={36} />
              Order History
            </h1>
            <p className="text-gray-600 mt-2">Track and review your past orders</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {orders.length === 0 ? (
          // Empty State
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <Package className="mx-auto text-gray-300" size={80} />
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">No orders yet</h2>
            <p className="mt-2 text-gray-600">Start shopping to see your order history!</p>
            <a
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Start Shopping
            </a>
          </div>
        ) : (
          // Orders List
          <div className="space-y-6">
            {orders.map((order: Order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Order Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-600">Order #</span>
                        <span className="text-lg font-bold text-gray-900">{order.id}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} />
                        <span>
                          Ordered: {formatDate(order.orderDate)}
                        </span>
                      </div>
                      {order.isDelivered && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <CheckCircle size={16} className="text-green-600" />
                          <span>
                            Delivered: {formatDate(order.date)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Status Badge */}
                      <div className="text-right">
                        {order.isDelivered ? (
                          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                            <CheckCircle size={18} />
                            Delivered
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                            <Clock size={18} />
                            In Transit
                          </div>
                        )}
                      </div>

                      {/* Total Amount */}
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Total</p>
                        <p className="text-2xl font-bold text-green-700">
                          ${order.amount.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleOrderExpansion(order.id)}
                    className="mt-4 w-full flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                  >
                    <span>{isExpanded(order.id) ? 'Hide Items' : 'View Items'}</span>
                    {isExpanded(order.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {/* Order Items (Expandable) */}
                {isExpanded(order.id) && (
                  <div className="p-6 bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Order Items ({order.items.length})
                    </h3>
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow duration-200"
                        >
                          {/* Item Image */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          />

                          {/* Item Details */}
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                              <span>Quantity: {item.quantity}</span>
                              <span>•</span>
                              <span className="font-medium text-green-700">
                                ${item.price.toFixed(2)} each
                              </span>
                            </div>
                          </div>

                          {/* Item Total */}
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Actions */}
                    <div className="mt-6 flex gap-3 justify-end">
                      <button className="px-6 py-2 border-2 border-green-600 text-green-600 font-medium rounded-full hover:bg-green-50 transition-colors duration-200">
                        Reorder
                      </button>
                      <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-colors duration-200">
                        View Invoice
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default OrderHistory;
