import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar(){
  const { user, logout } = useAuth();
  return (
    <nav style={{padding:10, borderBottom:"1px solid #ddd"}}>
      <Link to="/">Home</Link>{" | "}
      {user?.role === "admin" && <Link to="/admin">Admin</Link>}
      {user?.role === "teacher" && <Link to="/teacher">Teacher</Link>}
      {user?.role === "student" && <Link to="/student">Student</Link>}
      {" "}
      {user ? <button onClick={logout}>Logout</button> : <Link to="/">Login</Link>}
    </nav>
  );
}
