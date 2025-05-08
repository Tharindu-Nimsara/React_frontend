import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  // State hooks
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, {
        email,
        firstName,
        lastName,
        password,
      });

      toast.success("Registration successful!");
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (e) {
      toast.error(e.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="w-full h-screen bg-[url(login.jpg)] bg-center bg-cover backdrop-blur-md flex flex-col items-center justify-center">
      <form
        className="px-10 py-8 rounded-[20px] backdrop-blur-md shadow-xl w-80"
        onSubmit={handleRegister}
      >
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </div>

        <div className="flex justify-center items-center mt-4">
          <p className="text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
