import { Express } from "express";
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        userEmail: string;
      };
    }
  }
}
