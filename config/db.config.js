require("dotenv").config({ path: ".env" });


module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PW,
    DB: process.env.DB_NAME,
    dialect: "mysql",
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  