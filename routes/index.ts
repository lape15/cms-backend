import express from "express";
import { createPost } from "../controllers/posts/create-post";
import { signInUser } from "../controllers/sign-in";
import { createLocalUser } from "../controllers/sign-up";
import { authUser } from "../controllers/auth";
import { getPosts } from "../controllers/posts/getPost";
import { uploadProfilephoto } from "../controllers/upload";
const Multer = require("multer");
const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

const routes = express.Router();

routes.post("/signup", createLocalUser);
routes.post("/login", signInUser);
routes.post("/post", authUser, createPost);
routes.get("/posts", authUser, getPosts);
routes.post("/upload", authUser, upload.single("avatar"), uploadProfilephoto);

export default routes;
