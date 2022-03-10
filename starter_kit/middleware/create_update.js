const { body, validationResult } = require("express-validator");

const createfood = () => {
  return [
    body("name")
        .not().isEmpty()
        .withMessage("Category name"),
    body("price")
        .not().isEmpty()
        .withMessage("Price Empty!"),
    body("discount")
        .isNumeric()
        .islength({min: 0, max: 100})
        .withMessage("0-100% sale possible;"),
    body("stock")
        .isNumeric()
        .islength({min: 0})
        .withMessage("Can't be less than 0"),
    body("category_id")
        .isNumeric()
  ];
};

// const createcategory = () => {
//   return [

//   ]
// }

exports.createfood = createfood;
// exports.createcategory = createcategory;