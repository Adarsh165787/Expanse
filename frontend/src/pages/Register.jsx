import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const register = async () => {
    try {
      await API.post("/register", data);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
  console.log(err.response?.data);
  alert(err.response?.data?.msg || "Registration failed");
}
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow rounded w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button
          onClick={register}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}