import type { Discount } from "./models/db_models";

export const getFinalPrice = (discount: Discount, price: number) => {    
    return price * (1 - discount.discount_rate);
}

export const getOriginalPrice = (discount: Discount, price: number): number => {
  if (!discount || discount.discount_rate === 0) return price; 
  const discountRate = Number(Number(discount.discount_rate).toFixed(3));
  price = Number(price.toFixed(3))
  const originalPrice = price /( 1 - discountRate);
  return Number(originalPrice.toFixed(3));
};
