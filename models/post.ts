import { Sequelize, DataTypes, Model } from "sequelize";
import db from "./index";
import User from "./user";

class Post extends Model {
  static associate(models: any) {
    // define association here
    User.hasMany(models.Post, {
      foreignKey: "authorId",
    });
  }
}

Post.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    post: {
      type: DataTypes.STRING,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: "users",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    comments: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    likes: {
      type: DataTypes.INTEGER,
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    // Other model options go here
    sequelize: db.sequelize, // We need to pass the connection instance
    modelName: "posts", // We need to choose the model name
  }
);

export default Post;
