import { Link } from "react-router-dom";
import Header from "../components/Header";

function Dashboard() {
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  return (
    <div>
      <Header />

      <div className="dashboard-container">
        <h2>Welcome {name}</h2>

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
  );
}

export default Dashboard;