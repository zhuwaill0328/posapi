
var userService = require('./userService');
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const secret = ck.SECRETS;

var getUsers = async (req, res) => {

    var user = await userService.getUsers(req.body);
    res.send({ "status": true, "data": user });

}

var login = async (req, res) => {

   try{
    var user = await userService.login(req.body);
    if (user) {
        jwt.sign({ user }, secret,{expiresIn : '1 day'} ,(err, token) => {
            res.send({ "status": true, "data": user, "token": token });

        });
    }
   }catch(err){
    res.send({"status": false,"message": "Error while logging in user."})
   }

}


var createUser = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await userService.createUser(req.body);
                if (status) res.send({ "status": true, "message": "User created." });
                else res.send({ "status": false, "message": "Creating user failed!!!" });
            }
        })
    } catch (err) {
        res.send({"status":false,"message": "Error while creating user."})
    }

}

var updateUser = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await userService.updateUser(req.body);

                if (status) res.send({ "status": true, "message": "User updated." });
                else res.send({ "status": false, "message": "Updating user failed!!!" });

            }
        })
    } catch (err) {
        res.send({"status":false,"message": "Error while updating user."})
    }

}

var deleteUser = async (req, res) => {

   try{
    jwt.verify(req.token,secret, async (err)=>{
        if(err) res.sendStatus(403);
        else{
            var status = await userService.deleteUser(req.body);
            if (status) res.send({ "status": true, "message": "User Deleted." });
            else res.send({ "status": false, "message": "Deleting user failed!!!" });
        
        }
    })
   }catch(err){
res.send({"status":false,"message": "Error while deleting user."})
   }
}




module.exports = { createUser, login, updateUser, deleteUser, getUsers };