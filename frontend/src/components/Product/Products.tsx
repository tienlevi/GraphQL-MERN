import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PRODUCT, QUERY_PRODUCTS } from "../../constants/query";
import "./style.css";
import Button from "../Button";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Product from "../../interface/product";

function Products() {
  const { data, loading } = useQuery<{ products: Product[] }>(QUERY_PRODUCTS);
  const [mutate] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [{ query: QUERY_PRODUCTS }],
    onCompleted: () => {
      toast.success("Product deleted successfully");
    },
    onError: (error) => {
      toast.error(`Error deleting product: ${error.message}`);
    },
  });

  const handleDelete = (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirm) {
      mutate({
        variables: { id },
      });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="products-container">
      <div className="products-grid">
        {data?.products?.map((item) => (
          <div key={item.id} className="product-card">
            <h2 className="product-title">{item.name}</h2>
            <div className="product-category">{item.category}</div>
            <p className="product-description">{item.description}</p>
            <div className="product-footer">
              <span className="product-price">${item.price.toFixed(2)}</span>
              <div>
                <div className="product-rating">
                  <span className="product-rating-star">★</span>
                  <span>{item.rating}</span>
                </div>
                <div className="product-stock">Stock: {item.stock}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Button variant="secondary" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
              <Link to={`/edit/${item.id}`}>
                <Button variant="primary">Edit</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
