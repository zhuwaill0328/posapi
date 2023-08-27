var customerModel = require('./customerModel');

module.exports.getCustomers =(c)=>{

    return new Promise(function checkURL(resolve,reject){
        customerModel.find(c,function returnData(error,result){

            if(error)reject(false);
            else resolve(result);
        });


    }).catch(error=>{
        return error;
    });

}


module.exports.createCustomer = (c)=>{
    
    return new Promise(function myFn(resolve,reject){

        var cm = new customerModel();
        cm.Name = c.Name;
        cm.Phone = c.Phone;
        cm.Address= c.Address;
        //add model
      
        cm.save(function resultHandle(error,result){
            if(error) reject(false);
            else resolve(result);
        });

    }).catch(error=>{
        return error;
    });


}

module.exports.updateCustomer = (c)=>{

    return new Promise(function myFn(resolve,reject){
        customerModel.findByIdAndUpdate(c.Id,c,function returnData(error,result){

            if(error) reject(false);
            else resolve(result);

        });


    }).catch(error=>{
        return error;
    });


}