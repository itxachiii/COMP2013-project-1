/* 
Author: Naveed Amiri
Title: CartContainer.jsx
*/
import CartCard from "./CartCard";

export default function CartContainer({
  cart,
  cartCount,
  cartTotal,
  onEmptyCart,
  onRemoveItem,
  onCartQtyChange,
}) {
  const hasItems = cartCount > 0;

  return (
    <div className="cart-container">
      <h3>Cart items: {cartCount}</h3>

      {!hasItems ? (
        <div className="empty-msg">No items in cart</div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              onRemoveItem={onRemoveItem}
              onCartQtyChange={onCartQtyChange}
            />
          ))}

          <div className="cart-actions">
            <button className="danger" onClick={onEmptyCart}>
              Empty Cart
            </button>
            <button
              className="success"
              onClick={() => alert(`Total: $${cartTotal.toFixed(2)}`)}
            >
              Checkout: ${cartTotal.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
