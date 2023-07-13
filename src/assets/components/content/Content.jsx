import { useState } from "react";
import "./Content.css";
import Categories from "./Categories";

const Content = ({ data }) => {
  return (
    <main>
      <div className="content-box">
        <div className="container">
          <Categories data={data} />
          <div className="cart">{/* <p>Panier</p> */}</div>
        </div>
      </div>
    </main>
  );
};
export default Content;
