const db = require('./db');

async function getOrders () {

    const rows = await db.query(
        `SELECT id, name, sku, price, quantity, created_at, updated_at
        FROM product LIMIT 10`
    );
    console.log(rows);

    return {
        rows
    }
}
getOrders();
module.exports = { 
    getOrders
};