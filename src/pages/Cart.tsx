import { useState, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartAtom, CartItemCountAtom } from "../atoms/UserAtom";
import Navbar from "../components/Navbar";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { SignInAtom } from "../atoms/UserAtom";
import axios from "axios";
import type { Item } from "../sections/ItemsSection";

interface CartItem {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating: number;
  quantity: number;
  item: Item;
}

function Cart() {
  const cartItemCount = Number(useRecoilValue(CartItemCountAtom));
  const [promoCode, setPromoCode] = useState("");
  const isSignedIn = useRecoilValue(SignInAtom);
  const [cartItems, setCartItems] = useRecoilState(CartAtom);

  // Get cart items with their details
  const cartItemsWithDetails: CartItem[] = useMemo(
    () => (cartItems as CartItem[]).filter((item) => item.quantity > 0),
    [cartItems],
  );

  // Calculate totals
  const subtotal = cartItemsWithDetails.reduce(
    (acc, i) => acc + i.item.price * i.quantity,
    0,
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + shipping;

  const handleRemoveItem = (itemId: number, quantity: number) => {
    const decreaseQuantity = async (itemId: number, quantity: number) => {
      const token = localStorage.getItem("token");
      await axios.post(
        "/user/decrementquantity",
        {
          itemId: itemId,
          quantity: quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
    };
    decreaseQuantity(itemId, quantity);

    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.item?.id === itemId) {
          return { ...item, quantity: 0 };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const handleUpdateQuantity = (itemId: number, change: number) => {
    const increaseQuantity = async (itemId: number) => {
      const token = localStorage.getItem("token");
      await axios.post(
        "/user/incrementquantity",
        {
          itemId: itemId,
          quantity: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
    };

    const decreaseQuantity = async (itemId: number) => {
      const token = localStorage.getItem("token");
      await axios.post(
        "/user/decrementquantity",
        {
          itemId: itemId,
          quantity: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      
    };

    if (change > 0) {
      increaseQuantity(itemId);
        setCartItems((prevItems) => {
          const updatedItems = prevItems.map((item) => {
            if (item.item?.id === itemId) {
              return { ...item, quantity: item.quantity + 1};
            }
            return item;
          });
          return updatedItems;
        });
      
      
    } else if (change < 0) {
      decreaseQuantity(itemId);
        setCartItems((prevItems) => {
          const updatedItems = prevItems.map((item) => {
            if (item.item?.id === itemId) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
          return updatedItems;
        });
      
    }
  };

  const handleCheckout = () => {
    const checkout = async () => {
      const token = localStorage.getItem("token");
      const itemIds = cartItemsWithDetails.map((i) => i.item.id);
      const quantities = cartItemsWithDetails.map((i) => i.quantity);
      const prices = cartItemsWithDetails.map((i) => i.item.price);
      const response = await axios.post(
        "/user/order",
        {
          itemId: itemIds,
          quantity: quantities,
          price: prices,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 201) {
        window.location.href = "/order-complete";
      }
    };
    checkout();
  };

  const handleApplyPromo = () => {
    // Handle promo code application
    console.log("Apply promo:", promoCode);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        theme="default"
        cartItems={cartItemCount}
        isSignedIn={isSignedIn}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <ShoppingBag className="text-green-600" size={36} />
            Shopping Cart
          </h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} items in your cart
          </p>
        </div>

        {cartItemsWithDetails.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto text-gray-300" size={80} />
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-600">
              Add some fresh products from our farm!
            </p>
            <a
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Start Shopping
              <ArrowRight size={20} />
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItemsWithDetails.map((i) => (
                <div
                  key={i.item.id}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex gap-6">
                    {/* Item Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={i.item.image}
                        alt={i.item.name}
                        className="w-32 h-32 object-cover rounded-xl"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {i.item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {i.item.description}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm text-gray-500">
                              Category:
                            </span>
                            <span className="text-sm font-medium text-green-700">
                              {i.item.category === "f_n_v"
                                ? "Fruits and Vegetables"
                                : i.item.category}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            handleRemoveItem(i.item.id, i.quantity)
                          }
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-200"
                          aria-label="Remove item"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3 bg-green-50 rounded-full px-3 py-2 border border-green-200">
                          <button
                            onClick={() => handleUpdateQuantity(i.item.id, -1)}
                            className="w-8 h-8 flex items-center cursor-pointer justify-center bg-white hover:bg-green-600 hover:text-white text-green-600 rounded-full transition-all duration-200 shadow-sm"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-green-700 font-bold text-lg min-w-[2rem] text-center">
                            {i.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(i.item.id, 1)}
                            className="w-8 h-8 flex items-center cursor-pointer justify-center bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-200 shadow-sm"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-700">
                            ${(i.item.price * i.quantity).toFixed(2)}
                          </p>
                          <p className="text-xs text-gray-500">
                            per {i.item.unit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {subtotal > 0 && subtotal < 50 && (
                    <p className="text-xs text-green-600">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center border-t-2 border-gray-300 pt-4 mt-4">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-green-700">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight size={24} />
                </button>

                {/* Security Badge */}
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Secure Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
