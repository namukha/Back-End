const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const Order_detail = sequelize.define('order_detail', {
    food_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    food_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

async () => {
    await Order_detail.sync({ alter: true });
}

module.exports = Order_detail;