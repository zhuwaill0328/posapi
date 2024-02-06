var mysqlService = require('./mysqlService')
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const { estimatedDocumentCount } = require('../category/categoryModel');
const secret = ck.SECRETS;


var InsertToCartHistory = async (req,res) => {
    try{
        jwt.verify(req.token,secret,async (err) => {
            if(err) res.sendStatus(403);
            else{

                var cartHistory = await mysqlService.InsertToCartHistory(req.body);
                res.send({"status": true, "data": cartHistory});
            }
        })

    }catch(err){
        res.send({"status": false , "message": err})
    }
}


var getData = async (req,res) =>{
    try{

        jwt.verify(req.token,secret,async (err) => {
            if(err) res.sendStatus(403);
            else{

                var result = await mysqlService.getData(req.body);
                console.log("DaTA",result)
                res.send({"status": true, "data": result});
            }
        })
       
    }catch(err){
        res.send({"status": false , "message": err})
    }
}


module.exports = {InsertToCartHistory,getData}

