import { useCallback, useEffect, useState } from "react";
import API from "../services/api";
import SearchBar from "./SearchBar";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState("");
  const role = localStorage.getItem("role");

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

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log("Error deleting product");
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product);
  };

  const updateProduct = async () => {
    try {
      await API.put(`/products/${editingProduct._id}`, editingProduct);
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.log("Error updating product");
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>

      <SearchBar search={search} setSearch={setSearch} />

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
                      <button onClick={updateProduct}>Update</button>
                    ) : (
                      <button onClick={() => startEdit(product)}>Edit</button>
                    )}

                    <button onClick={() => deleteProduct(product._id)}>
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