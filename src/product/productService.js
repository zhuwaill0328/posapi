var productModel = require('./productModel');

module.exports.getProducts =(p)=>{

    return new Promise(function checkURL(resolve,reject){

        productModel.find(p,function returnData(error,result){
            if(error) reject(false);
            else resolve(result);
        })
    
    }).catch(error=>{
        return error;
    });


};

module.exports.createProduct = (p)=>{

    return new Promise(function myFn(resolve,reject){
        var pm = new productModel();
        
        pm.Category = p.Category;
        pm.Name = p.Name;
        pm.Image = p.Image;
        pm.Stocks = p.Stocks;
        pm.Serials  = p.Serials;
        pm.Price = p.Price;
        pm.Cost = p.Cost;
      
        pm.save(function resultHandle(error,result){
            console.log(error)
            if(error) reject(false);
            else resolve(result);
        });

    }).catch((error)=>{
        console.log(error);
    }).catch(error=>{
        return error;
    });


};

module.exports.updateProduct = (p)=>{

    return new Promise(function myFn(resolve,reject){
            productModel.findByIdAndUpdate(p.Id,p,function returnData(error,result){
                if(error) reject(false);
                else resolve(result);
    
            });

    }).catch(error=>{
        return error;
    });


} ;


module.exports.deleteProduct = (p)=>{

    return new Promise(function myFn(resolve,reject){
        productModel.findByIdAndDelete(p.Id, function returnData(error,result){

            if(error) reject(false);
            else resolve(result);


        })

    }).catch(error=>{
        return error;
    });


}