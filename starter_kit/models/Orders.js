const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const Orders = sequelize.define('orders', {
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deliverman_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ordered_date: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    total_fee: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

async () => {
    await Orders.sync({ alter: true });
}

module.exports = Orders;