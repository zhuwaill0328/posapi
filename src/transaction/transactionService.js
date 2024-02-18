var transactionModel = require('./transactionModel');
var pModel = require('../product/productModel');

module.exports.getTransactions = (t) => {

    return new Promise(function checkURL(resolve, reject) {

        transactionModel.find(t, function returnData(error, result) {
            if (error) reject(false);
            else resolve(result);
        })

    }).catch(error => {
        return error;
    });


};

module.exports.createTransaction = (t) => {

    return new Promise(function myFn(resolve, reject) {
        var tm = new transactionModel();
        if(t._id){
            tm._id = t._id;
        }
        tm.Customer = t.Customer;
        tm.User = t.User;
        tm.Date = t.Date;
        tm.Payment = t.Payment;
        tm.Status = t.Status;
        tm.Cart = t.Cart;
        ////tm.Total =t.Total

        for(var i= 0;i < t.Products.length; i++){

       //console.log(t.Products[i])
           
         pModel.findByIdAndUpdate(t.Products[i]._id,t.Products[i]).catch(error=>{
           
         })

        }

        tm.save(function resultHandle(error, result) {
          
            if (error) reject(false);
            else resolve(result);
        });

    }).catch(error => {
        return error;
    });


};

module.exports.updateTransaction = (t) => {

    return new Promise(function myFn(resolve, reject) {
        transactionModel.findByIdAndUpdate(t.Id, t, function returnData(error, result) {
            if (error) reject(false);
            else resolve(result);

        });

    }).catch(error => {
        console.log(error)
        return error;
    });


};
