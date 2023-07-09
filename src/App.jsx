import { useState } from "react";
import "./App.css";
import Header from "./assets/components/header/Header";
import Content from "./assets/components/content/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
