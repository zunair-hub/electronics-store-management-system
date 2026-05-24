import { useEffect, useState, useCallback } from "react";
import Header from "../components/Header";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import API from "../services/api";

function Products() {

  const role = localStorage.getItem("role");

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProducts = useCallback(async () => {
  try {
    const response = await API.get(`/products?search=${search}`);
    setProducts(response.data);
  } catch (error) {
    console.log("Error fetching products");
  }
}, [search]);

useEffect(() => {
  fetchProducts();
}, [fetchProducts]);

  return (
    <div>
      <Header />  

      {role === "admin" && <ProductForm fetchProducts={fetchProducts} />}

      <ProductList
        products={products}
        fetchProducts={fetchProducts}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default Products;