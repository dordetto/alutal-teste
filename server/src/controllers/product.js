const Product = require("../models/product");
const status = require("http-status");
//var Sequelize = require("sequelize");

module.exports = {
  async index(req, res) {
    const product = await Product.findAll();
    return res.json(product);
  },

  async findOne(req, res) {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      }});
    return res.json(product);
  },

  async insert(req, res) {
    const product = await Product.create(req.body);
    return res.json(product).status(201);
  },

  async update(req, res) {
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.json(product).status(201);
  },

  async delete(req, res) {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(product);
  },
};
