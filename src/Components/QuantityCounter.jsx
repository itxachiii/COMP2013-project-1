/* 
Author: Naveed Amiri
Title: QuantityCounter.jsx
*/
export default function QuantityCounter({ value, onMinus, onPlus }) {
  return (
    <div className="qty">
      <button onClick={onMinus}>-</button>
      <span className="qty-val">{value}</span>
      <button onClick={onPlus}>+</button>
    </div>
  );
}
