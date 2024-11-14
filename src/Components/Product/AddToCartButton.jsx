import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={decrement}
        className="bg-pink-600 text-white text-md px-4 py-3 hover:bg-pink-700 disabled:opacity-50"
        disabled={quantity === 0}
      >
        <FaMinus/>
      </button>
      <span className="text-md font-semibold text-pink-600 border border-pink-600 py-[7px] px-4">{quantity}</span>
      <button
        onClick={increment}
        className="bg-pink-600 text-white text-md px-4 py-3 hover:bg-pink-700"
      >
    <FaPlus/>
      </button>
    </div>
  );
};

export default AddToCartButton;
