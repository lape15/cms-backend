import Post from "../../models/post";
import User from "../../models/user";
import { NextFunction, Request, Response } from "express";

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const post = req.body;

  if (!post.title) {
    res.status(500).send({
      message: "Title cannot be empty",
    });
    return;
  }

  if (!post.post) {
    res.status(500).send({
      message: "Must have content!",
    });
    return;
  }
  const user = req.user;
  post.authorId = user?.userId;
  post.likes = 0;
  post.comments = 2;
  try {
    const userRow = await User.findOne({
      where: {
        email: user!.userEmail,
      },
    });

    const oldPosts = userRow?.getDataValue("posts");
    const result = await Post.create(post);
    res.status(200).send({
      message: "Ok",
      data: result,
    });
    await User.update({ posts: oldPosts + 1 }, { where: { id: user?.userId } });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating post!");
  }
};
