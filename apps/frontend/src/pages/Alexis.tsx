import { useEffect, useState } from "react";
import api from "../libs/api";

interface ItemInterface {
  id: number;
  name: string;
  price: number;
}

const Alexis = () => {
  const [productList, setProductList] = useState<ItemInterface[]>([]);
  const [form, setForm] = useState({ id: 0, name: "", price: 0 });
  const [isEditing, setIsEditing] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProductList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.put(`/products/${form.id}`, form);
      } else {
        await api.post("/products", form);
      }
      setForm({ id: 0, name: "", price: 0 });
      setIsEditing(false);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item: ItemInterface) => {
    setForm(item);
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("¿Deseas eliminar este producto?")) {
      try {
        await api.delete(`/products/${id}`);
        fetchProducts();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-lg">
        🌟 Gestión de Productos
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mb-12 p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-200"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            required
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 border-2 border-indigo-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium text-gray-800"
          />
          <input
            required
            type="number"
            placeholder="Precio"
            min="1"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            className="p-3 border-2 border-indigo-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium text-gray-800"
          />
        </div>
        <div className="mt-6 flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            {isEditing ? "Actualizar" : "Agregar"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setForm({ id: 0, name: "", price: 0 });
                setIsEditing(false);
              }}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {productList.length === 0 ? (
        <p className="text-center text-gray-700 text-xl">No hay productos disponibles</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {productList.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border-t-8 border-indigo-400 relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-20 h-20 bg-indigo-200 rounded-bl-full z-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-800">{food.name}</h2>
                <p className="text-lg text-gray-600 mt-2">${food.price}</p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleEdit(food)}
                    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md font-medium transition-all duration-200"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(food.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-all duration-200"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alexis;
