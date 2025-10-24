/* 
Author: Naveed Amiri
Title: CartCard.jsx
*/
import QuantityCounter from "./QuantityCounter";

export default function CartCard({ item, onRemoveItem, onCartQtyChange }) {
  const sub = item.qty * item.price;

  // min 1 in cart
  function minus() {
    const next = item.qty - 1;
    const fixed = next < 1 ? 1 : next;
    onCartQtyChange(item.id, fixed);
  }
  function plus() {
    onCartQtyChange(item.id, item.qty + 1);
  }
  function remove() {
    onRemoveItem(item.id);
  }

  return (
    <div className="cart-card">
      <img src={item.image} alt={item.name} width="50" />
      <div className="cart-title">
        <div>{item.name}</div>
        <div className="brand">{item.brand}</div>
      </div>
      <div className="cart-price">${item.price.toFixed(2)}</div>

      <QuantityCounter value={item.qty} onMinus={minus} onPlus={plus} />

      <div className="cart-sub">Total: ${sub.toFixed(2)}</div>
      <button className="remove" onClick={remove}>Remove</button>
    </div>
  );
}
