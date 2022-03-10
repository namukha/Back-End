const express = require("express");
const Food = require("../models/Food");
const User = require('../models/User')
const Orders = require('../models/Orders')


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
  Food.findAll()
    .then((data) => res.json({ success: true, data: "Successfully updated!" }))
    .catch((err) => res.json({ success: false, data: "Can NOT update!" }))
};

const find_user = (req, res, next) => {
  User.findOne( {where: { id: req.params.userId}} )
        .then((data) => res.json({ data: data}))
        .catch((err) => res.json({ data: err }));
}

const create_food = (req, res, next) => {
  Food.create(req.body)
      .then((data) => res.json({ success: true, data: "Successfully updated!" }))
      .catch((err) => res.json({ success: false, data: "Can NOT update!" }))
}

const add_user = (req, res, next) => {
  User.create(req.body)
      .then((data) => res.json({ success: true, data: "Successfully updated!" }))
      .catch((err) => res.json({ success: false, data: "Can NOT update!" }))
}

const update_food = (req, res, next) => {
  Food.update( req.body, { where: { id: 8 } } )
      .then((data) => res.json({ success: true, data: "Successfully updated!" }))
      .catch((err) => res.json({ success: false, data: "Can NOT update!" }))
}

const delete_order = (req, res, next) => {
  Orders.destroy({ where: { id: req.params.orderId } })
      .then((data) => res.json({ success: true, data: "Successfully updated!" }))
      .catch((err) => res.json({ success: false, data: "Can NOT update!" }))
}

const add_order = (req, res, next) => {
  Orders.create(req.body)
      .then((data) => res.json({ success: true, data: "Successfully updated!" }))
      .catch((err) => res.json({ success: false, data: "Can NOT update!" }))
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
  create_food
};
