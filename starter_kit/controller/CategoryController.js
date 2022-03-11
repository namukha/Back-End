const express = require('express')
const Category = require('../models/Category');

const add_category = (req, res, next) => {
    Category.create(req.body)
        .then((data) => res.json({ success: true, data: data }))
        .catch((err) => res.json({ success: false, data: err }))
}

module.exports = {
    add_category
}