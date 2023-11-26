import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Temp from "./temp";
import MyComponent from "./MyComponent";
import Temp3 from "./Temp3";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/temp2" element={<Temp3 />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<MyComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
