export function ProductIndex(props) {
  return (
    <div>
      <h2>All Products</h2>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h3>Price: {product.price}</h3>
          <img src={product.images} />
          <p>Description: {product.description}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
}
