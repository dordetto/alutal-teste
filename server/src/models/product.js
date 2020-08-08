const Sequelize = require("sequelize");

//busco os dados de configuracao do bd - Configurado em apenas um lugar
const sequelize = require("../config/database.js");

//Creio a tabela no Banco - Para não usar uma já existem
const Product = sequelize.define(
  "tb_product",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING(20),
      unique: true,
    },
    barcode: {
      allowNull: true,
      type: Sequelize.STRING(11),
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
    },

    enable: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Product;
