var debitService = require('./debitService');
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const secret = ck.SECRETS;


var getDebits = async(req,res)=>{
    try{
        jwt.verify(req.token, secret, async (err) => {

            if (err) res.sendStatus(403);
            else {

                var debits = await debitService.getDebits(req.body);
                res.send({ "status": true, "data": debits });
            }

        })
    }catch (err){
        res.send({ "status": false, "message": "Error getting Customer Debits." })
    }
}

var createDebit = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) {
                res.sendStatus(403);
            } else {
                var status = await debitService.createDebit(req.body);
                if (status) res.send({ "status": true, "message": "Customer debit created." ,"data" : status});
                else res.send({ "status": false, "message": "Creating Customer debit failed!!!" });

            }
        });
    } catch (err) {
        res.send({ "status": false, "message": "Error creating customer debit." })
    }

}

var updateDebit = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) {
                res.sendStatus(403);
            } else {

                var status = await debitService.updateDebit(req.body);

                if (status) res.send({ "status": true, "message": "Customer debit updated." });
                else res.send({ "status": false, "message": "Updating customer debit failed!!!" });

            }


        });
    } catch (err) {
        res.send({ "status": false, "message": "Error updating customer debit." })
    }




}

module.exports = {getDebits,createDebit,updateDebit}