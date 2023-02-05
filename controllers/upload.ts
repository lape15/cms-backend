import { Request, Response } from "express";
import User from "../models/user";
const Multer = require("multer");

const cloudinary = require("cloudinary").v2;

interface MulterRequest extends Request {
  file: any;
}

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

const uploadImage = async (imagePath: any) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    resource_type: "auto",
    width: 200,
    height: 200,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const uploadProfilephoto = async (req: Request, res: Response) => {
  if (!req.file) return;
  const user = req.user;
  const file = req.file;
  const b64 = Buffer.from(file!.buffer).toString("base64");
  let dataURI = "data:" + file!.mimetype + ";base64," + b64;
  try {
    const result = await uploadImage(dataURI);
    if (result) {
      const userObj = await User.findOne({
        where: {
          email: user!.userEmail,
        },
      });
      await userObj!.update({ photo: result.url });
      console.log({ userObj });
      res.status(200).send({
        message: "Image uploaded",
        user: userObj,
      });
    }
  } catch (err) {
    res.status(500).send("Error uploading message");
    console.log(err);
  }
};
