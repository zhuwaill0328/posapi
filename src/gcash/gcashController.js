var gcashService = require('./gcashService');

var jwt = require('jsonwebtoken');
const ck = require('ckey');
const secret = ck.SECRETS;


var getTransactions = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var transaction = await gcashService.getTransactions(req.body);
                res.send({ "status": true, "data": transaction });
            }
        })
    } catch (err) {
        res.send({ "status": false, "message": "Error getting transaction." })
    }
}

var createTransaction = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await gcashService.createTransaction(req.body);
                if (status) res.send({ "status": true, "message": "Transaction success." });
                else res.send({ "status": false, "message": "Transaction failed!!!" });

            }
        })
    } catch (err) {
        res.send({ "status": false, "message": "Error creating transaction." })
    }
}


var updateTransaction = async (req, res) => {

    try {

        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await gcashService.updateTransaction(req.body);
                if (status) res.send({ "status": true, "message": "Transaction updated." });
                else res.send({ "status": false, "message": "Updating Transaction failed!!!" });


            }
        })
    } catch (err) {
        res.send({ "status": false, "message": "Error updating transaction." })
    }
}

module.exports = { createTransaction, updateTransaction, getTransactions };