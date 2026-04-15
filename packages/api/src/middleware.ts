import { NextFunction, Request, Response } from "express";

export function logger(req: Request, _res: Response, next: NextFunction): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
}

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
}
