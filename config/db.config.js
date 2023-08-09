// DATABASE SETUP
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "inidbgua",
    DB: "todo-app",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};

