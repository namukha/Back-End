// a. Array turuld update uildel +

// b. Array object deer update +

// c. Logical operator ashiglah +

// d. elemMatch, arrayFilters ashiglah +

// e. Slice, sort ashiglah +

// f. $inc, $min ashiglah +

// g. $addToSet, $pull tus burt 1, 1 +

// h. $position tohirson gazart ashiglah +

db.customers.updateMany(
    {},
    {$set: {"accounts.$[match]": 555555}},
    {arrayFilters: [{"match": {$gte: 500000, $lt: 600000}}]});

db.customers.updateOne(
    {_id: ObjectId("5ca4bbcea2dd94ee58162a68"), accounts: 332179},
    {$set: {"accounts.$[]": 333333}})

db.customers.updateOne(
    {_id: ObjectId("5ca4bbcea2dd94ee58162a68")},
    {$addToSet: {"tier_and_details.0df078f33aa74a2e9696e0520c1a828a.benefits": {$each: ["ene", "ter"]}}})

db.accounts.updateMany(
    {},
    {$pull: {$or: [{products: {$in: "Derivatives"}}, {products: {$in: "CurrencyService"}}]}})

db.customers.updateOne(
    {_id: ObjectId("5ca4bbcea2dd94ee58162a6a")},
    {
        $push: {
        accounts: {
            $each: [1234, 1235, 2222],
            $position: -1,
            $slice: -5
        }
        }
    })

db.transactions.updateMany(
    {transactions: {
        $elemMatch: {transaction_code: "buy"}
    }},
    {$inc: {"transactions.$[].amount": 300000}})

