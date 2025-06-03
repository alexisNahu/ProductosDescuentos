import { useState } from "react";

export default function RossmaryVillalba() {
  const [fecha, setFecha] = useState("");
  const [dias, setDias] = useState<number | null>(null);

  const calcularDias = () => {
    if (!fecha) return;
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    const diferencia = hoy.getTime() - nacimiento.getTime();
    const diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    setDias(diasVividos);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Calcular días de vida
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        ¡Hola! Soy Rossmary y esta es mi página personal para la tarea de PW1 💻
      </p>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        className="p-2 border rounded mb-2 dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={calcularDias}
        className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Calcular días vividos
      </button>
      {dias !== null && (
        <p className="mt-4 text-lg text-green-600 dark:text-green-400">
          Viviste {dias} días ✨
        </p>
      )}
    </div>
  );
}
