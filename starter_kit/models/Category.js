const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const Category = sequelize.define('category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    type: {
        type: DataTypes.STRING
    }
}, {
    // ---
    timestamps: false,
    freezeTableName: true
});

async () => {
    await Category.sync({alter: true});
}
module.exports = Category;