var debitModel = require('./debitModel');
var mongoose = require('mongoose')
var id =  mongoose.Types.ObjectId();

module.exports.getDebits=(d)=>{
    return new Promise(function checkURL(resolve,reject){
        debitModel.find(d,function returnData(error,result){
            if(error)reject(false);
            else resolve(result);
        })
    }).catch(error=>{
        return error;
    });
}


module.exports.createDebit = (db)=>{
    return new Promise(function myFn(resolve,reject){

        const tr = {
            Id: id,
            Date : db.Transaction.Date,
            Amount: db.Transaction.Amount,
            Balance: db.Transaction.Balance,
            PaymentHistory : db.Transaction.PaymentHistory
        };
        var debit = new debitModel();
        debit.Customer = db.Customer;
        debit.Username =db.Username;
        debit.Transaction = tr
        debit.Status = 'Unpaid';
        debit.save(function resultHandle(error,result){
            if(error) reject(false);
            else resolve(result);
        })



    }).catch(error=>{
        //console.log(error)
        return error;
    });
}

module.exports.updateDebit = (debit)=>{
    return new Promise(function myFn(resolve,reject){
        debitModel.findByIdAndUpdate(debit._id,debit,function returnData(error,result){
            if(error) reject(false);
            else resolve(result);

        });

    }).catch(error=>{
        return error;
    });
}