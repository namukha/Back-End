const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

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
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
  timestamps: false
});

async () => {
  await Food.sync({alter: true});
}

module.exports = Food;