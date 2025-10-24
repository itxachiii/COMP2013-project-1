/* 
Author: Naveed Amiri
Title: ProductsContainer.jsx
*/
import ProductCard from "./ProductCard";

export default function ProductsContainer({ products, onAddToCart }) {
  return (
    <div className="products-container">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
