import { Link } from "react-router-dom";
import Products from "../components/Product/Products";

function Home() {
  return (
    <>
      <h1 className="products-title">List Products</h1>
      <div style={{ marginBottom: 30 }}>
        <Products />
      </div>
      <Link to={`/add`}>Create Product</Link>
    </>
  );
}

export default Home;
