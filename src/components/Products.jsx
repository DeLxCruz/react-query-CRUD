import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsAPI";

function Products() {
  const {
    data: products,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>

          <button>Eliminar</button>
          <input type="checkbox" name="inStock" id="" />
          <label htmlFor="">inStock</label>
        </div>
      ))}
    </div>
  );
}

export default Products;
