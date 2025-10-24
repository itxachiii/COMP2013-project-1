/* 
Author: Naveed Amiri
Title: GroceriesAppContainer.jsx
*/
import { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import products from "../data/products";

export default function GroceriesAppContainer() {
  // cart
  const [cart, setCart] = useState([]);

  // derived (Lecture 1: reduce)
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const cartTotal = cart.reduce((total, item) => total + item.qty * item.price, 0);

  // add item 
  function handleAddToCart(product, qty) {
    if (qty === 0) {
      alert("Please enter a quantity before adding to cart.");
      return;
    }
    const exists = cart.find((c) => c.id === product.id);
    if (exists) {
      const updated = cart.map((c) =>
        c.id === product.id ? { ...c, qty: c.qty + qty } : c
      );
      setCart(updated);
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        qty: qty,
      };
      setCart([...cart, newItem]);
    }
  }

  // change qty in cart 
  function handleCartQtyChange(id, nextQty) {
    const fixedQty = nextQty < 1 ? 1 : nextQty;
    const updated = cart.map((c) => (c.id === id ? { ...c, qty: fixedQty } : c));
    setCart(updated);
  }

  // remove single item
  function handleRemoveItem(id) {
    setCart(cart.filter((c) => c.id !== id));
  }

  // empty cart
  function handleEmptyCart() {
    setCart([]);
  }

  return (
    <>
      <NavBar cartHasItems={cartCount > 0} />
      <div className="app-body">
        <ProductsContainer products={products} onAddToCart={handleAddToCart} />
        <CartContainer
          cart={cart}
          cartCount={cartCount}
          cartTotal={cartTotal}
          onEmptyCart={handleEmptyCart}
          onRemoveItem={handleRemoveItem}
          onCartQtyChange={handleCartQtyChange}
        />
      </div>
    </>
  );
}
