/* 
Author: Naveed Amiri
Title: ProductCard.jsx
*/
import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ product, onAddToCart }) {
  const [qty, setQty] = useState(0); 

  const minus = () => setQty(qty - 1 < 0 ? 0 : qty - 1);
  const plus = () => setQty(qty + 1);
  const add = () => onAddToCart(product, qty);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="60" />
      <h3>{product.name}</h3>
      <div className="brand">{product.brand}</div>
      <div className="price">${product.price.toFixed(2)}</div>

      <QuantityCounter value={qty} onMinus={minus} onPlus={plus} />

      <button onClick={add}>Add to Cart</button>
    </div>
  );
}
