// src/controllers/reports.ts
import { Request, Response } from 'express';
import { db } from '../db/connection';
import { reports } from '../db/schema';

export const getAllReports = async (req: Request, res: Response) => {
  try {
    const allReports = await db.select({
      id: reports.id,
      action_type: reports.action_type,
      user_id: reports.user_id,
      on_table: reports.on_table
    }).from(reports);
    res.json(allReports);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los reportes' });
  }
};


