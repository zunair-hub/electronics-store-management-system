import Header from "../components/Header";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function Products() {
  const role = localStorage.getItem("role");

  return (
    <div>
      <Header />

      {role === "admin" && <ProductForm />}

      <ProductList />
    </div>
  );
}

export default Products;