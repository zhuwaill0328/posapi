var debitModel = require('./debitModel');

module.exports.getDebits=(d)=>{
    return new Promise(function checkURL(resolve,reject){
        debitModel.find({d},function returnData(error,result){
            if(error)reject(false);
            else resolve(result);
        }).sort({
            Transction :{
                Date : 1
            }
        })
    }).catch(error=>{
        return error;
    });
}


module.exports.createDebit = (debit)=>{
    return new Promise(function myFn(resolve,reject){
        var d = new debitModel();
        d = debit;

        d.save(function resultHandle(error,result){
            if(error) reject(false);
            else resolve(result);
        })

    }).catch(error=>{
        return error;
    });
}

module.exports.updatePayment = (debit)=>{
    return new Promise(function myFn(resolve,reject){
        debitModel.findByIdAndUpdate(debit._id,debit,function returnData(error,result){
            if(error) reject(false);
            else resolve(result);

        });

    }).catch(error=>{
        return error;
    });
}