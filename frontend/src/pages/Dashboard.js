import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import API from "../services/api";

function Dashboard() {
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await API.get("/products");
        setTotalProducts(response.data.length);
      } catch (error) {
        console.log("Error fetching product count");
      }
    };

    fetchProductCount();
  }, []);

  return (
    <div>
      <Header />

      <div className="dashboard-container">
        <h2>Welcome {name}</h2>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Total Products</h3>
            <p className="dashboard-number">{totalProducts}</p>
          </div>

          {role === "admin" ? (
            <div className="dashboard-card">
              <h3>Admin Dashboard</h3>
              <p>You can manage electronic products in the system.</p>
              <Link to="/products">
                <button>Manage Products</button>
              </Link>
            </div>
          ) : (
            <div className="dashboard-card">
              <h3>User Dashboard</h3>
              <p>You can view and search available electronic products.</p>
              <Link to="/products">
                <button>View Products</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;