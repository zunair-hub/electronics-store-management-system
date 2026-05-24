import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div className="header">
      <h1>Electronics Store Management</h1>

      <div>
        <Link to="/dashboard">Dashboard</Link>

        {role === "admin" && <Link to="/products">Products</Link>}

        {role === "user" && <Link to="/products">View Products</Link>}

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;