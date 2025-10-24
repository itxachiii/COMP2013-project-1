/* 
Author: Naveed Amiri
Title: NavBar.jsx
*/
export default function NavBar({ cartHasItems }) {
  return (
    <div className="nav">
      <div className="hello">Hello, username</div>
      <div className="title">Groceries App 🧺</div>
      <div className="cart-icon">
        <span className={cartHasItems ? "dot dot-on" : "dot"}>&nbsp;</span>
        🛒
      </div>
    </div>
  );
}
