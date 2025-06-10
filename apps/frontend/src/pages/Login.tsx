import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../libs/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const doLogin = async () => {
    try {
      await api.post("/auth/login", form, { withCredentials: true });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
        <h2 className="text-center mb-6 text-xl font-semibold text-gray-700">Iniciar sesión</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            />
          </div>

          <button
            type="button"
            onClick={doLogin}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );  
};

export default Login;
