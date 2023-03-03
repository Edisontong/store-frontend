export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <h2>Name: {props.product.name}</h2>
      <h3>Price: {props.product.price}</h3>
      <p>{props.product.images}</p>
      <p>Description: {props.product.price}</p>
      <p>Quantity: {props.product.quantity}</p>
    </div>
  );
}
