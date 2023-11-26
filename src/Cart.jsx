import React from "react";
import { useCart } from "./Context/CartProvider";
import Card from "./ProductCard/Card";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useCart();
  const navigate = useNavigate("");
  return (
    <>
      <div className="mx-2  border-b-2 border-gray-300">
        <h1 className="text-center text-3xl font-bold font-serif py-8">
          Your Cart ❤️
        </h1>
      </div>
      {!cartData.length > 0 ? (
        <div className="h-[calc(100vh-102px)]  flex flex-col items-center justify-center">
          <h1 className="text-2xl font-serif  md:text-5xl">Your Cart is empty .</h1>

          <button className="text-2xl md:text-3xl font-serif mt-6 underline underline-offset-4 text-blue-400 "
          onClick={()=>{
            navigate("/")
          }}
          >Home</button>

          
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
        {cartData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Cart;
