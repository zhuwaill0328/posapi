var userModel = require('./userModel');

module.exports.getUsers =(u)=>{

    return new Promise(function checkURL(resolve,reject){
        userModel.find(u,function returnData(error,result){

            if(error)reject(false);
            else resolve(result);
        });


    }).catch(error=>{
        return error;
    });


}

module.exports.login = (u)=>{

    return new Promise(function myFn(resolve,reject){
        userModel.findOne({Username: u.Username,Password: u.Password,Status: 'Active'},function returnData(error,result){
            if(error)reject(false);
            else resolve(result);
        });
    }).catch(error=>{
        return error;
    });

}

module.exports.createUser = (u)=>{

    return new Promise(function myFn(resolve,reject){

        var um = new userModel();
        um.Name = u.Name;
        um.Phone = u.Phone;
        um.Username = u.Username;
        um.Password = u.Password;
        um.Status = u.Status;
        um.Role = u.Role;
        um.Pin = u.Pin
        //add model
      
        um.save(function resultHandle(error,result){
            if(error) reject(false);
            else resolve(result);
        });

    }).catch(error=>{
        return error;
    });


}

module.exports.updateUser = (u)=>{

    return new Promise(function myFn(resolve,reject){
        userModel.findByIdAndUpdate(u.Id,u,function returnData(error,result){

            if(error) reject(false);
            else resolve(result);

        });


    }).catch(error=>{
        return error;
    });


}

module.exports.deleteUser = (u)=>{

    return new Promise(function myFn(resolve,reject){
        userModel.findByIdAndDelete(u.Id, function returnData(error,result){

            if(error) reject(false);
            else resolve(result);


        })

    }).catch(error=>{
        return error;
    });


}

