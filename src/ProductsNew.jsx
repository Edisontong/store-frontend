export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Photo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input price="price" type="text" />
        </div>
        <div>
          Image Url: <input Image="Image" type="text" />
        </div>
        <div>
          Description: <input desscription="desscription" type="text" />
        </div>
        <div>
          Quantity: <input quantity="quantity" type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
