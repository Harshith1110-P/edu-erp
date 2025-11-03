import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login(){
  const [role, setRole] = useState("student");
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name: "Demo User", role };
    login(user);
    if (role === "admin") nav("/admin");
    if (role === "teacher") nav("/teacher");
    if (role === "student") nav("/student");
  };

  return (
    <form onSubmit={handleSubmit} style={{padding:20}}>
      <h2>Login (Demo)</h2>
      <label>
        Role:
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
