const CartItem = ({ product, index, handleRemove }) => {

  console.log("Cart Item", product);
  return (
    // <article>
    //   <img
    //     src={product.image?.url}
    //     alt="No Image Available"
    //   ></img>
    //   <h1>{product.title}</h1>
    //   <h3>Price: {product.product_price}</h3>
    //   <button
    //     className="button"
    //     onClick={() => handleRemove(index)}
    //   >
    //     Remove from cart
    //   </button>
    // </article>
    <form  >
    <a className='product-card__link ss-pointer' style={{textalign:"center", textDecoration:"none"}}>
      <div className="product-card-img-wrap">
        <div className='product-card-img-inner'>
           {product.image ? <img src={product.image.url} style={{width:"100%", height:"400px", padding:"1rem", margin:"1rem"}}/> : <img src={product.imageConnection.edges?.[0].node.url} style={{width:"100%", height:"400px", padding:"1rem", margin:"1rem"}}/> }
        </div>
        <div className='product-title' style={{textalign:"center", textDecoration:"none"}}>
         {product.title}
        </div>
        <div className='product-title' style={{textalign:"center", textDecoration:"none"}}>
         ${product.product_price}
        </div>
      </div>
    </a>
    
    { <button
         className="button button--full add-to-cart" onClick={() => handleRemove(index)} style={{backgroudColor:"red"}}>
          <span>Remove from Cart</span>
      </button>
}
      
  </form>
  );
};

export default CartItem;
