import { Sequelize, DataTypes, Model } from "sequelize";
import db from "./index";
import Post from "./post";

// const passportLocalMongoose = require("passport-local-mongoose");

class User extends Model {
  static associate(models: any) {
    // define association here
    User.hasMany(models.Post, {
      foreignKey: "authorId",
    });
  }
}

User.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posts: {
      type: DataTypes.INTEGER,
      allowNull: false,

      //   references: {
      //     // User hasMany WorkingDays n:n
      //     model: "posts",
      //     key: "authorId",
      //   },
    },
    photo: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },

  {
    // Other model options go here
    sequelize: db.sequelize, // We need to pass the connection instance
    modelName: "users", // We need to choose the model name
    timestamps: false,
  }
);

export default User;
