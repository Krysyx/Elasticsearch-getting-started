import { NextFunction, Request, Response } from "express";

export interface ExpressRequestFnMapper {
  (req: Request, res: Response, next: NextFunction): any;
}
