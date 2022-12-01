import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

interface ReqObj extends Request {
  user: any;
}
export const authUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization!.split(" ")[1];
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

    // retrieve the user details of the logged in user
    // const user = await decodedToken;

    // pass the user down to the endpoints here
    req.user = decodedToken;

    // pass down functionality to the endpoint
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error,
    });
  }
};
