import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./assets/components/header/Header";
import Content from "./assets/components/content/Content";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--kc7q9tc45mqv.code.run"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <>
      <Header data={data} />
      <Content data={data} cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default App;
