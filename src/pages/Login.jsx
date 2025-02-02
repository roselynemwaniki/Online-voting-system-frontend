import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5173/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Login successful! Redirecting...");
        // You can replace this with redirection logic or navigation using `useNavigate`.
      } else {
        setError(data.message || "Login failed");
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error. Try again.");
      toast.error("Network error. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-3 rounded w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-3 rounded w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
        </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
