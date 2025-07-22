import { Link } from "react-router-dom";

function AlexisIndex() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel de Navegación</h1>

      <div className="space-y-4 w-full max-w-sm">
        <Link
          to="/alexis/products"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
        >
          Ir a Products
        </Link>
        <Link
          to="/alexis/discounts"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
        >
          Ir a Discounts
        </Link>
        <Link
          to="/alexis/reports"
          className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
        >
          Ir a Reports
        </Link>
      </div>
    </div>
  );
}

export default AlexisIndex;
