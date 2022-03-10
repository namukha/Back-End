const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
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

module.exports = User;