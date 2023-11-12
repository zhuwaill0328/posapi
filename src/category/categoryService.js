var categoryModel =require('./categoryModel');

module.exports.getCategories =(c)=>{

    return new Promise(function checkURL(resolve,reject){
        categoryModel.find({c},function returnData(error,result){

            if(error)reject(false);
            else resolve(result);
        }).sort({
            Name: 1
        });


    }).catch(error=>{
        return error;
    });


}

module.exports.createCategory = (category)=>{

    return new Promise(function myFn(resolve,reject){
        var categoryData = new categoryModel();
        categoryData.Name = category.Name;
      
        categoryData.save(function resultHandle(error,result){
            if(error) reject(false);
            else resolve(result);
        });

    }).catch(error=>{
        return error;
    });


}

module.exports.update = (category)=>{

    return new Promise(function myFn(resolve,reject){
        categoryModel.findByIdAndUpdate(category.Id,category,function returnData(error,result){

            if(error) reject(false);
            else resolve(result);

        });


    }).catch(error=>{
        return error;
    });


}

module.exports.delete = (category)=>{

    return new Promise(function myFn(resolve,reject){
        categoryModel.findByIdAndDelete(category.Id, function returnData(error,result){

            if(error) reject(false);
            else resolve(result);


        })

    }).catch(error=>{
        return error;
    });


}