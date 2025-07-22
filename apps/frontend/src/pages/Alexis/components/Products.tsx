import React, { useEffect, useState, type ChangeEvent } from 'react';
import type { Discount, Product } from '../models/db_models';
import * as productsService from '../service/products.service';
import { getAllDiscounts, getDiscountById } from '../service/discounts.service';
import { useAlexisContext } from '../contexts/alexis.context';
import { getOriginalPrice } from '../utilities';
import SearchForm from './SearchForm';

function Products() {
  const {productsList, setProductsList, discountList, setDiscountList} = useAlexisContext()
  const [isEditingProduct, setIsEditingProduct] = useState<boolean>(false);
  const [showingValues, setShowingValues] = useState<Product[]>([])
  const [searchInput, setSearchInput] = useState<string>()


  const initialProduct = {
    id: 0,
    name: '',
    price: 0,
    discount_id: null
  }

  const [productForm, setProductForm] = useState<Product>(initialProduct);

  const reset = () => {
    setProductForm(initialProduct);
    setIsEditingProduct(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setProducts();
  }

  const setProducts = async () => {
    const allProducts = await productsService.getAllProducts()
    setProductsList(allProducts)
  }

  const setDiscounts = async () => {
    const allDiscoutns = await getAllDiscounts()
    setDiscountList(allDiscoutns)
  }


  useEffect(() => {
    if (!productsList.length) setProducts();
    if (!discountList.length) setDiscounts();
    setShowingValues(productsList)
  }, [productsList, discountList]);

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditingProduct) {
      await productsService.updateProduct(productForm)
      reset()

      return 
    }

    await productsService.createProduct(productForm)
    reset()

  };

  const handleEditProduct = async (item: Product) => {

    const discount: Discount = await getDiscountById(item.discount_id);

    const price = Number(String(item.price).trim());

    const originalPrice = getOriginalPrice(discount, price);

    setProductForm({
      ...item,
      price: parseFloat(originalPrice.toFixed(2)),
    });

    setIsEditingProduct(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteProduct = async (id: number) => {
    if (window.confirm('¿Deseas eliminar este producto?')) {
        await productsService.deleteProducts(id)
        reset()
    }
  };


  return (
    <>
      <SearchForm 
        filterLogic={(searchInput) => productsList.filter(product => product.name.includes(searchInput as string))}
        completeList={productsList}
        setShowingValues={setShowingValues}
      />
      <form
        onSubmit={handleSubmitProduct}
        className="mb-12 p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-200"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            required
            type="text"
            placeholder="Nombre"
            value={productForm.name}
            onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
            className="p-3 border-2 border-indigo-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium text-gray-800"
          />
          <input
            required
            type="text"
            placeholder="Precio"
            value={productForm.price === 0 ? '' : productForm.price.toString()}
            onChange={(e) => {
              const inputValue = e.target.value;
              const isValidNumber = /^\d*\.?\d*$/.test(inputValue); // solo dígitos y punto decimal

              if (isValidNumber) {
                setProductForm({
                  ...productForm,
                  price: inputValue === '' ? 0 : Number(inputValue),
                });
              }
            }}
            className="p-3 border-2 border-indigo-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium text-gray-800"
          />


          <select
            required
            value={productForm.discount_id ?? ''}
            onChange={(e) =>
              setProductForm({ ...productForm, discount_id: e.target.value === '' ? null : Number(e.target.value) })
            }
            className="p-3 border-2 border-indigo-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium text-gray-800"
          >
            <option value="" disabled>
              Seleccione un descuento
            </option>
            {discountList.map((discount) => (
              <option key={discount.id} value={discount.id}>
                {(discount.discount_rate * 100).toFixed(2)}%
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {isEditingProduct ? 'Actualizar' : 'Agregar'}
          </button>
          {isEditingProduct && (
            <button
              type="button"
              onClick={() => {
                setProductForm({ id: 0, name: '', price: 0, discount_id: null });
                setIsEditingProduct(false);
                window.scrollTo({top: 0, behavior: 'smooth'})
              }}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {showingValues.length === 0 ? (
        <p className="text-center text-gray-700 text-xl">No hay productos disponibles</p>
      ) : (
        <>
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-lg">
            🌟 Gestión de Productos
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {showingValues.map((food) => (
              <div
                key={food.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border-t-8 border-indigo-400 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-20 h-20 bg-indigo-200 rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-800">{food.name}</h2>
                  <p className="text-lg text-gray-600 mt-2">${food.price}</p>
                  <p className="text-lg text-gray-600 mt-2">
                    {food.discount_id
                      ? `${(discountList.find((d) => d.id === food.discount_id)?.discount_rate ?? 0) * 100}%`
                      : 'Sin descuento'}
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => handleEditProduct(food)}
                      className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md font-medium transition-all duration-200"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(food.id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-all duration-200"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Products;
