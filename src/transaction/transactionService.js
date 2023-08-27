var transactionModel =require('./transactionModel');

module.exports.getTransactions = (t)=>{

    return new Promise(function checkURL(resolve,reject){

        transactionModel.find(t,function returnData(error,result){
            if(error) reject(false);
            else resolve(result);
        })
    
    }).catch(error=>{
        return error;
    });


};

module.exports.createTransaction = (t)=>{

    return new Promise(function myFn(resolve,reject){
        var tm = new transactionModel();
        tm.Customer = t.Customer;
        tm.User = t.User;
        tm.Date = t.Date;
        tm.Payment = t.Payment;
        tm.Status = t.Status;
        tm.Cart =t.Cart;

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
            transactionModel.findByIdAndUpdate(t.Id,t,function returnData(error,result){
                if(error) reject(false);
                else resolve(result);
    
            });

    }).catch(error=>{
        return error;
    });


} ;
