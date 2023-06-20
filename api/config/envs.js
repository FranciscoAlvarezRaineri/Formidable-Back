require("dotenv").config();
module.exports = {
  NAME: "formidable",
  PORT: 8000,
  DB_HOST: "formidable",
  SECRET: process.env.SECRET,
};
