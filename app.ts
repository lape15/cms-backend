import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
const app = express();
import { v2 as cloudinary } from "cloudinary";

import cors from "cors";
import morgan from "morgan";
require("dotenv").config();
import routes from "./routes";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

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

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

export default app;
