export interface Discount {
  id: number,
  discount_rate: number
}

export interface Product {
  id: number,
  name: string,
  price: number,
  discount_id: number | null
}

export interface Report {
  id: number,
  action_type: string,
  user_id: string,
  on_table: string,
}
