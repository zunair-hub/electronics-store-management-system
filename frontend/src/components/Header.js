import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="header">
      <h1>Electronics Store Management</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Header;