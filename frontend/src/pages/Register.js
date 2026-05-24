import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      await API.post("/auth/register", form);
      setMessage("Registration successful. Please login.");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      setMessage("Registration failed. User may already exist.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={registerUser}>
        <h2>Register</h2>

        {message && <p>{message}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;