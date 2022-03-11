const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');
const Category = require('./Category')

const Food = sequelize.define('food', {
  // columns
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  portion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  discount: {
    type: DataTypes.INTEGER
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
  timestamps: false
});

Category.hasMany(Food);
Food.belongsTo(Category);

async () => {
  await Food.sync({alter: true});
}

module.exports = Food;