import axios from "axios";
import { useState, useEffect } from "react";
import { ProductIndex } from "./ProductIndex";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <h1>Eddies Store</h1>
      <ProductIndex products={products} />
    </div>
  );
}
