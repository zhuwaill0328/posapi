const gcashModel = require('./gcashModel');
var gcashtransaction = require('./gcashModel');

module.exports.getTransactions = (t)=>{

    return new Promise(function checkURL(resolve,reject){

        gcashtransaction.find(t,function returnData(error,result){
            if(error) reject(false);
            else resolve(result);
        })
    
    }).catch(error=>{
        return error;
    });


};

module.exports.createTransaction = (t)=>{

    return new Promise(function myFn(resolve,reject){

        console.log(t)
        var tm = new gcashModel();
        tm.Customer = t.Customer;
        tm.User = t.User;
        tm.TransactionType = t.TransactionType;
        tm.ReferenceNumber =t.ReferenceNumber;
        tm.Amount = t.Amount;
        tm.TransactionFee =t.TransactionFee;
        tm.CurrentUser = t.CurrentUser
        tm.v = t.FeeDeducted
        
        tm.save(function resultHandle(error,result){
            if(error) reject(false);
            else resolve(result);
        });

    }).catch((error)=>{
        console.log(error);
    }).catch(error=>{
        return error;
    });


};

module.exports.updateTransaction = (t)=>{

    return new Promise(function myFn(resolve,reject){
        gcashtransaction.findByIdAndUpdate(t.Id,t,function returnData(error,result){
                if(error) reject(false);
                else resolve(result);
    
            });

    }).catch(error=>{
        return error;
    });


} ;
