import React from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useCart } from "../Context/CartProvider";

const Card = ({ product }) => {
  const [cartData, setCartData] = useCart();

  const isItemInCart = (product) =>
    cartData.some((item) => item.id === product.id);

  const addItemToCart = (product) => {
    if (isItemInCart(product)) {
      alert("Item is already in the cart!");
      return;
    }
    setCartData([...cartData, product]);
  };

  const removeItemFromCart = (product) => {
    if (!isItemInCart(product)) {
      alert("Item is not in the cart!");
      return;
    }
    const updatedCart = cartData.filter((item) => item.id !== product.id);
    setCartData(updatedCart);
  };

  return (
    <div key={product.id} className="w-full bg-white shadow-md rounded-lg px-10 py-10">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="rounded-md h-48 w-full"
      />
      <div className="mt-4">
        <h1 className="text-lg uppercase font-bold truncate">
          {product.title}
        </h1>
        <p className="mt-2 text-gray-600 text-sm truncate">
          {product.description}
        </p>
        <div className="flex justify-between items-center text-2xl mt-2">
          <p className=" text-gray-600">${product.price}</p>
          <button className="outline-none">
            {isItemInCart(product) ? (
              <IoMdHeart
                onClick={() => {
                  removeItemFromCart(product);
                }}
              />
            ) : (
              <IoMdHeartEmpty
                onClick={() => {
                  addItemToCart(product);
                }}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
