import express, { NextFunction, Request, Response } from "express";
const app = express();

import cors from "cors";
import morgan from "morgan";
require("dotenv").config();
import routes from "./routes";
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", routes);

app.get("/", function (req, res) {
  res.send({ message: "Connected to base!" });
});

export default app;
