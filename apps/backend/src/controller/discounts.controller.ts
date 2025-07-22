// src/controllers/discounts.ts
import { Request, Response } from 'express';
import { db } from '../db/connection';
import { discounts } from '../db/schema';
import { eq } from 'drizzle-orm';

export const getAllDiscounts = async (req: Request, res: Response) => {
  try {
    const allDiscounts = await db.select().from(discounts);
    res.json(allDiscounts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los descuentos' });
  }
};

export const getDiscountById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const discount = await db.select()
      .from(discounts)
      .where(eq(discounts.id, Number(id)));

    if (discount.length === 0) {
      res.status(404).json({ message: 'Descuento no encontrado' });
    }

    res.json(discount[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el descuento' });
  }
};

export const createDiscount = async (req: Request, res: Response) => {
  const { discount_rate } = req.body;
  if (discount_rate === undefined) {
    res.status(400).json({ message: 'El campo discount_rate es obligatorio' });
  }

  try {
    const result = await db.insert(discounts).values({ discount_rate });
    res.status(201).json({ message: 'Descuento creado', result });
  } catch (error) {
    console.error('Error al crear descuento:', error);
    res.status(500).json({ message: 'Error al crear el descuento' });
  }
};

export const updateDiscount = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { discount_rate } = req.body;
  if (discount_rate === undefined) {
    res.status(400).json({ message: 'El campo discount_rate es obligatorio' });
  }

  try {
    await db.update(discounts)
      .set({ discount_rate })
      .where(eq(discounts.id, Number(id)));
    res.json({ message: 'Descuento actualizado' });
  } catch (error) {
    console.error('Error al actualizar descuento:', error);
    res.status(500).json({ message: 'Error al actualizar el descuento' });
  }
};


export const deleteDiscount = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await db.delete(discounts)
      .where(eq(discounts.id, Number(id)));
    res.json({ message: 'Descuento eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el descuento' });
  }
};

export const getDiscountByRate = async (req: Request, res: Response) => {
  const { discount_rate } = req.params;  // ya es string

  try {
    const discount = await db.select()
      .from(discounts)
      .where(eq(discounts.discount_rate, discount_rate)); // pasa string directamente

    if (discount.length === 0) {
      res.status(404).json({ message: 'Descuento no encontrado' });
    }

    res.json(discount[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el descuento por tasa' });
  }
};


