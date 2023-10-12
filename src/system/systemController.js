var systemService = require('./systemService')
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const secret = ck.SECRETS;


var getSystemDetails = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var systemDetails = await systemService.getSystemDetails(req.body);
                res.send({ "status": true, "data": systemDetails });
            }
        })
    } catch (err) {
        res.send({ "status": false, "message": err })
    }
}

var saveSystemDetails = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await systemService.saveSystemDetails(req.body);
                if (status) res.send({ "status": true, "message": "System Details Updated." });
                else res.send({ "status": false, "message": "System Details Failed" });

            }
        })
    } catch (err) {
        res.send({ "status": false, "message": err })
    }
}


var updateSystemDetails = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await systemService.updateSystemDetails(req.body);
                if (status) res.send({ "status": true, "message": "System Details updated." });
                else res.send({ "status": false, "message": "Updating System Details failed!!!" });

            }
        })
    } catch (err) {
        res.send({ "status": false, "message": err})
    }

}

module.exports = { saveSystemDetails, updateSystemDetails, getSystemDetails };