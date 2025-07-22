import api from "../../../libs/api";
import type { Discount, Product } from "../models/db_models";
import { getFinalPrice } from "../utilities";
import { getDiscountById } from "./discounts.service";

export const createProduct = async (product: Product) => {
    try {
        const discount = await getDiscountById(product.discount_id)
        const finalPrice = getFinalPrice(discount, product.price)

        await api.post('/products', { ...product, price: finalPrice });
    } catch (e) {
        console.error(e);
    }
}

export const updateProduct = async (updatedProduct: Product) => {
    try {
        const discount = await getDiscountById(updatedProduct.discount_id)
        const finalPrice = getFinalPrice(discount, updatedProduct.price)

        await api.put(`/products/${updatedProduct.id}`, {
            ...updatedProduct,
            price: finalPrice,
        });
    } catch (e) {
        console.error(e);
    }
}


export const getAllProducts = async () => {
    try {
        const response = await api.get("/products");
        return response.data
    } catch (e) {
        console.error(e)
    }
}

export const deleteProducts = async (productId: number) => {
    try {
        await api.delete(`/products/${productId}`);
    } catch (e) {
        console.error(e)
    }
}