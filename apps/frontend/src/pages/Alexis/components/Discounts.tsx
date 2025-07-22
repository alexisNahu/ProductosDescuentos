import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import * as discountsService from "../service/discounts.service";
import { useAlexisContext } from "../contexts/alexis.context";
import type { Discount } from "../models/db_models";
import SearchForm from "./SearchForm";

const Discounts = () => {
  const { discountList, setDiscountList } = useAlexisContext();
  const [discountForm, setDiscountForm] = useState<Discount>({ id: 0, discount_rate: 0 });
  const [isEditing, setIsEditing] = useState(false);

  const [showingValues, setShowingValues] = useState<Discount[]>([])

  const [searchInput, setSearchInput] = useState<string>()

  const initialDiscount: Discount = {
    id: 0,
    discount_rate: 0,
  };

  const reset = () => {
    setDiscountForm(initialDiscount);
    setIsEditing(false);
    setDiscounts();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  
  const setDiscounts = async () => {
    const allDiscounts = await discountsService.getAllDiscounts();
    setDiscountList(allDiscounts)
    setShowingValues(allDiscounts)
  };
  
  useEffect(() => {
    if (!discountList.length) {
      setDiscounts()
    }
  }, [discountList]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();    

    if (isEditing) {
      await discountsService.updateDiscount(discountForm);
    } else {
      await discountsService.createDiscount(discountForm);
    }

    reset();
  };

  const handleEdit = (discount: Discount) => {
    setDiscountForm({
      id: discount.id,
      discount_rate: Number(discount.discount_rate),
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("¿Deseas eliminar este descuento?")) {
      await discountsService.deleteDiscount(id);
      await setDiscounts();
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-green-100 via-lime-100 to-emerald-50">
      <SearchForm 
        filterLogic={(searchInput) => discountList.filter(dis => dis.discount_rate == Number(searchInput))}
        completeList={discountList}
        setShowingValues={setShowingValues}
      />
      <form
        onSubmit={handleSubmit}
        className="mb-12 p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-200"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            required
            type="number"
            step="0.01"
            min="0"
            max="1"
            placeholder="Tasa de descuento (ej: 0.15 para 15%)"
            value={
              discountForm.discount_rate === 0 ? "" : discountForm.discount_rate.toString()
            }
            onChange={(e) =>
              setDiscountForm({
                ...discountForm,
                discount_rate: Number(e.target.value),
              })
            }
            className="p-3 border-2 border-green-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-gray-800"
          />
        </div>

        <div className="mt-6 flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            {isEditing ? "Actualizar" : "Agregar"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setDiscountForm(initialDiscount);
                setIsEditing(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-lg">
        🎯 Lista de Descuentos
      </h1>

      {showingValues.length === 0 ? (
        <p className="text-center text-gray-700 text-xl">No hay descuentos disponibles</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-12">
          {showingValues.map((discount) => (
            <div
              key={discount.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border-t-8 border-green-400 relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-20 h-20 bg-green-200 rounded-bl-full z-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-800">Descuento ID: {discount.id}</h2>
                <p className="text-lg text-gray-600 mt-2">
                  Tasa de descuento: {(Number(discount.discount_rate) * 100).toFixed(2)}%
                </p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleEdit(discount)}
                    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md font-medium transition-all duration-200"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(discount.id)}
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

export default Discounts;
