const Sequelize = require('sequelize');
require("dotenv").config();
// DATABASE SETUP
module.exports = {
    HOST: "containers-us-west-175.railway.app",
    USER: "postgres",
    PASSWORD: "Ejo3sHT8tUIlEPfhG1Fy",
    DB: "railway",
    dialect: "postgres",
     dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
// module.exports = {
//     HOST: process.env.DB_HOST,
//     USER: process.env.DB_USER,
//     PASSWORD: process.env.DB_PASSWORD,
//     DB: process.env.DB_NAME,
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
// };


// module.exports = db

