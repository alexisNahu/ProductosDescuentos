import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");

function verifyToken(req:Request, res:Response, next:NextFunction) {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
}
