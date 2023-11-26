import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./ProductCard/Card";
import Footer from "./Footer";
import Header from "./Header";
// import { useCart } from "./Context/CartProvider";

function MyComponent() {
  // const [cartData, setCartData] = useCart();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate("");

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products"); // fetch the products
    const data = await response.json(); // convert the response to json
    setProducts(data.products); // set the products in the state to the products we fetched
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <Header/>
      <div className="w-full flex flex-col justify-center bg-gray-100">
       

        {!products.length > 0 ? (
          <div className="h-[calc(100vh-80px)] flex">
           
            <img className="m-auto"
              src={"/__Iphone-spinner-1.gif"}
              alt="Loading spinner"
              width="50"
              height="40"
            />
          </div>
        ) : null}

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
          {products &&
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}

export default MyComponent;
