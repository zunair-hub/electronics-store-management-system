import { useState } from "react";
import API from "../services/api";

function ProductForm({ fetchProducts }) {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.category ||
      !product.price ||
      !product.quantity ||
      !product.description
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      await API.post("/products", product);

      setMessage("Product added successfully.");

      setProduct({
        name: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
      });

      if (fetchProducts) {
        fetchProducts();
      }
    } catch (error) {
      setMessage("Error adding product. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>

      {message && <p>{message}</p>}

      <form onSubmit={addProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;