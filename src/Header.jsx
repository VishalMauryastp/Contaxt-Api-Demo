import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("");
  return (
    <div className="bg-gray-700">
      <div className="flex py-5 text-orange-400 justify-between items-center mx-8 md:mx-20  ">
        <h1
          className="text-2xl cursor-pointer uppercase font-bold  text-center "
          onClick={() => {
            navigate("/");
          }}
        >
          Shop
        </h1>
        <button
          className="font-bold text-orange-400 rounded bg-gray-600 px-6 py-2 capitalize"
          onClick={() => {
            navigate("/cart");
          }}
        >
          ❤️  Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
