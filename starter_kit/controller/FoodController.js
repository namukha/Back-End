const express = require("express");
const { Op } = require('sequelize');
const Food = require("../models/Food");
const User = require('../models/User');
const Orders = require('../models/Orders');
const Category = require('../models/Category');


// const create = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ success: false, errors: errors.array() })
//   } else {
//     const data = req.body;
//     Food
//   }
// }

const get_foods = (req, res, next) => {
  Food.findAll({
    include: [
      {
        model: Category,
      }
    ]
  })
  .then((data) => res.json({ success: true, data: data }))
  .catch((err) => res.json({ success: false, data: err }))
};

const get_food = (req, res, next) => {
  Food.findAll({
    where: {
      [Op.and]: {
        category_id: {
          [Op.lt]: 2
        }
      },
      [Op.and]: {
        price: 6800
      }
    }
  })
    .then((data) => res.json({ success: true, data: data }))
    .catch((err) => res.json({ success: false, data: err }))
};

const find_user = (req, res, next) => {
  User.findOne( {where: { id: req.params.userId}} )
        .then((data) => res.json({ data: data}))
        .catch((err) => res.json({ data: err }));
}

const create_food = (req, res, next) => {
  Food.create(req.body)
      .then((data) => res.json({ success: true, data: data }))
      .catch((err) => res.json({ success: false, data: err }))
}

const add_user = (req, res, next) => {
  User.create(req.body)
      .then((data) => res.json({ success: true, data: data }))
      .catch((err) => res.json({ success: false, data: err }))
}

const update_food = (req, res, next) => {
  Food.update( req.body, { where: { id: 8 } } )
      .then((data) => res.json({ success: true, data: data }))
      .catch((err) => res.json({ success: false, data: err }))
}

const delete_order = (req, res, next) => {
  Orders.destroy({ where: { id: req.params.orderId } })
      .then((data) => res.json({ success: true, data: data }))
      .catch((err) => res.json({ success: false, data: err }))
}

const add_order = (req, res, next) => {
  Orders.create(req.body)
      .then((data) => res.json({ success: true, data: data }))
      .catch((err) => res.json({ success: false, data: err }))
}

const delete_user = (req, res, next) => {
  User.destroy( { where: { id: req.params.userId } } )
      .then((data) => res.json({ data: data}))
      .catch((err) => res.json({ data: err }));
    
}

module.exports = {
  get_foods,
  find_user,
  add_user,
  update_food,
  delete_order,
  add_order,
  delete_user,
  create_food,
  get_food
};
