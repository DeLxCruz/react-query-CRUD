import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getProducts } from "../api/productsAPI";

function Products() {
  const queryClient = useQueryClient();

  const {
    data: products,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (products) => products.sort((a, b) => b.id - a.id),
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return products.length === 0 ? (
    <h1>No products</h1>
  ) : (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => deleteProductMutation.mutate(product.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
