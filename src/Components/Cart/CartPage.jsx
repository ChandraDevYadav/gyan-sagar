import React, { useState } from "react";

const CartPage = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 20, quantity: 2, image: "/pro1.jpg" },
    { id: 2, name: "Product 2", price: 15, quantity: 1, image: "/pro2.jpg" },
    { id: 3, name: "Product 3", price: 25, quantity: 3, image: "/pro3.jpg" },
  ]);

  // Update quantity function
  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Remove item function
  const removeItem = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculate total price of all items
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-2 md:px-24 py-8">
      <div className="">
        {/* Table Headings */}
        <div className="overflow-x-auto">
  <div className="flex items-center justify-between py-4 px-4 border-b bg-pink-600 border-gray-200 font-semibold text-white">
    <div className="w-1/3 text-left min-w-[150px]">Product</div>
    <div className="w-1/5 text-center min-w-[100px]">Price</div>
    <div className="w-1/5 text-center min-w-[100px]">Quantity</div>
    <div className="w-1/5 text-center min-w-[100px]">Total</div>
    <div className="w-1/6 text-center min-w-[100px]">Edit</div>
  </div>

  {/* Cart Items */}
  {cartItems.length > 0 ? (
    <div className="mb-4 px-4 bg-white">
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200">
          {/* Product Info */}
          <div className="flex items-center w-1/3 min-w-[150px] space-x-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
            <h2 className="text-lg font-medium text-gray-700">{item.name}</h2>
          </div>
          
          {/* Price */}
          <div className="w-1/5 text-center text-gray-500 min-w-[100px]">${item.price}</div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center w-1/5 space-x-2 min-w-[100px]">
            <button
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md"
            >
              -
            </button>
            <span className="text-gray-700">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="w-1/5 text-center text-gray-700 font-semibold min-w-[100px]">${item.price * item.quantity}</div>

          {/* Remove Button */}
          <div className="w-1/6 text-center min-w-[100px]">
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">Your cart is empty.</p>
  )}
</div>


        {/* Calculate Shipping and Cart Totals */}
        <div className="mt-6 px-4 flex flex-col bg-white md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          {/* Calculate Shipping */}
          <div className="p-4 w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Calculate Shipping</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Country</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Select Country</option>
                  <option>Nepal</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Postal Code</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter postal code"
                />
              </div>
              <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-md">
                Calculate Shipping
              </button>
            </form>
          </div>

          {/* Cart Totals */}
          <div className="p-4 w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-700">${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-4 border-b border-gray-300 pb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-700">$5.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span className="text-gray-800">Total</span>
              <span className="text-gray-800">${calculateTotal() + 5}</span>
            </div>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
