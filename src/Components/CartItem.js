const CartItem = ({ product, index, handleRemove }) => {
  return (
    <article>
      <img
        src={product.image?.url}
        alt="No Image Available"
      ></img>
      <h1>{product.title}</h1>
      <h3>Price: {product.product_price}</h3>
      <button
        className="button"
        onClick={() => handleRemove(index)}
      >
        Remove from cart
      </button>
    </article>
  );
};

export default CartItem;
