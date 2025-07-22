import api from "../../../libs/api";
import type { Discount } from "../models/db_models";

export const getAllDiscounts = async () => {
    try {
      const response = await api.get("/discounts");
      return response.data
    } catch (e) {
      console.error(e);
    }
}

export const updateDiscount = async (discount: Discount) => {
    try {
        await api.put(`/discounts/${discount.id}`, discount);
    } catch (e: any) {
        if (e.response.status === 500) {
            alert('Ya hay un descuento con ese valor')

        }
        console.error(e)
    }
}

export const createDiscount = async (discount: Discount) => {
    try {
        await api.post("/discounts", discount);
    } catch (e: any) {
        if (e.response.status === 500) {
            alert('Ya hay un descuento con ese valor')   
        }
        console.error(e)
    }
}

export const deleteDiscount = async (discountId: number) => {
    try {
        await api.delete(`/discounts/${discountId}`)
    } catch (e) {
        console.error(e)
    }
}

export const getDiscountById = async (discountId: number | null) => {
    try {
        const response = await api.get(`/discounts/getById/${discountId}`)
        return response.data
    } catch (e) {
        console.error(e)
    }
}
