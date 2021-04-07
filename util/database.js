const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testing", "wido", "asd123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
