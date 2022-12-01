import Post from "../../models/post";
import { NextFunction, Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
  const user = req.user;
  try {
    const posts = await Post.findAll({
      where: {
        authorId: user?.userId,
      },
    });
    res.status(200).send({
      data: posts,
    });
  } catch (err) {
    res.status(500).send("Error fetching posts");
  }
};
