import { useCart, useDispatchCart } from "../Context/CartContext";
import CartItem from "../Components/CartItem";
export default function CartPage() {
  const items = useCart();
  console.log(items);
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main>
        <div className="empty-cart">
          <h2>Your Shopping Cart is Empty</h2>
          <p>You have no items in your shopping cart. Start adding some!</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      {items.map((item, index) => (
        <div>
          <CartItem
            handleRemove={handleRemove}
            key={index}
            product={item}
            index={index}
          />
        </div>
      ))}
    </main>
  );
}
