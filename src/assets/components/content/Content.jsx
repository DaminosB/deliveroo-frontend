import { useState } from "react";
import "./Content.css";
import Categories from "./Categories";
import Cart from "./Cart";

const Content = ({ data, cartItems, setCartItems }) => {
  return (
    <main>
      <div className="content-box">
        <div className="container">
          <Categories
            data={data}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </main>
  );
};
export default Content;
