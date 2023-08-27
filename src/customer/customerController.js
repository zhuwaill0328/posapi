var customerService = require('./customerService');
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const secret = ck.SECRETS;


var getCustomers = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {

            if (err) res.sendStatus(403);
            else {
                var customer = await customerService.getCustomers(req.body);
                res.send({ "status": true, "data": customer });
            }
        })
    } catch (err) {
        res.send({ "status": false, "message": "Error getting data." });
    }

}

var createCustomer = async (req, res) => {

    try {

       jwt.verify(req.token,secret, async (err)=>{
        if(err) res.sendStatus(403);
        else{
            var status = await customerService.createCustomer(req.body);
            if (status) res.send({ "status": true, "message": "User created." });
            else res.send({ "status": false, "message": "Creating customer failed!!!" });
        }
       });

    } catch (err) {
        res.send({ "status": false, "message": "Customer already exists!" ,"error": err});
    }

}

var updateCustomer = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await customerService.updateCustomer(req.body);

                if (status) res.send({ "status": true, "message": "User updated." });
                else res.send({ "status": false, "message": "Updating user failed!!!" });
            }
        })
    } catch (err) {
        res.send({ "status": false, "message": "Error updating." });
    }


}

module.exports = { createCustomer, updateCustomer, getCustomers };
