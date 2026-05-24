import { useState } from "react";
import API from "../services/api";
import SearchBar from "./SearchBar";

function ProductList({ products, fetchProducts, search, setSearch }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const role = localStorage.getItem("role");

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/products/${id}`);

      setMessage("Product deleted successfully.");
      setMessageType("error");

      fetchProducts();

      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);
    } catch (error) {
      setMessage("Error deleting product. Please try again.");
      setMessageType("error");
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product);
  };

  const updateProduct = async () => {
    try {
      await API.put(`/products/${editingProduct._id}`, editingProduct);

      setMessage("Product updated successfully.");
      setMessageType("success");

      setEditingProduct(null);
      fetchProducts();

      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);
    } catch (error) {
      setMessage("Error updating product. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>

      <SearchBar search={search} setSearch={setSearch} />

      {message && (
        <p
          className={
            messageType === "success" ? "success-message" : "error-message"
          }
        >
          {message}
        </p>
      )}

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                {editingProduct?._id === product._id ? (
                  <input
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.name
                )}
              </td>

              <td>
                {editingProduct?._id === product._id ? (
                  <input
                    value={editingProduct.category}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        category: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.category
                )}
              </td>

              <td>
                {editingProduct?._id === product._id ? (
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: e.target.value,
                      })
                    }
                  />
                ) : (
                  `$${product.price}`
                )}
              </td>

              <td>
                {editingProduct?._id === product._id ? (
                  <input
                    type="number"
                    value={editingProduct.quantity}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        quantity: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.quantity
                )}
              </td>

              <td>
                {editingProduct?._id === product._id ? (
                  <input
                    value={editingProduct.description}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        description: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.description
                )}
              </td>

              {role === "admin" && (
                <td>
                  {editingProduct?._id === product._id ? (
                    <button className="update-btn" onClick={updateProduct}>
                      Update
                    </button>
                  ) : (
                    <button
                      className="edit-btn"
                      onClick={() => startEdit(product)}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;