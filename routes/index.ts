import express from "express";
import { createPost } from "../controllers/posts/create-post";
import { signInUser } from "../controllers/sign-in";
import { createLocalUser } from "../controllers/sign-up";
import { authUser } from "../controllers/auth";
import { getPosts } from "../controllers/posts/getPost";
const routes = express.Router();

routes.post("/signup", createLocalUser);
routes.post("/login", signInUser);
routes.post("/post", authUser, createPost);
routes.get("/posts", authUser, getPosts);

export default routes;
