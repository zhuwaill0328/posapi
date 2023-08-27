var transactionService = require('./transactionService');

var jwt = require('jsonwebtoken');
const ck = require('ckey');
const secret = ck.SECRETS;


var getTransactions = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var transaction = await transactionService.getTransactions(req.body);
                res.send({ "status": true, "data": transaction });
            }
        })
    } catch (err) {
        res.send({ "status": false, "message": "Error getting transactions." })
    }
}

var createTransaction = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await transactionService.createTransaction(req.body);
                if (status) res.send({ "status": true, "message": "Transaction success." });
                else res.send({ "status": false, "message": "Transaction failed!!!" });

            }
        })
    } catch (err) {
        res.send({ "status": false, "message": "Error creating transactions." })
    }
}


var updateTransaction = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await transactionService.updateTransaction(req.body);
                if (status) res.send({ "status": true, "message": "Transaction updated." });
                else res.send({ "status": false, "message": "Updating Transaction failed!!!" });

            }
        })
    } catch (err) {
        res.send({ "status": false, "message": "Error updating transactions." })
    }

}

module.exports = { createTransaction, updateTransaction, getTransactions };