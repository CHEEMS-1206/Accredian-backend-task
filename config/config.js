import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Initialize Sequelize with your MySQL credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || "localhost", // Change this to your MySQL host if it's not localhost
    dialect: "mysql",
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;