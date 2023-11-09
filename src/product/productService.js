
var productModel = require('./productModel');
var stockModel = require('./stockModel');

module.exports.getProducts = (p) => {

    return new Promise(function checkURL(resolve, reject) {
        productModel.find(p, function returnData(error, result) {
            if (error) reject(false);
            else resolve(result);
        })

    }).catch(error => {
        return error;
    });


};


module.exports.getStockHistory = (p) => {

    return new Promise(function checkURL(resolve, reject) {

        stockModel.find(p, function returnData(error, result) {
            if (error) reject(false);
            else resolve(result);
        })

    }).catch(error => {
        return error;
    });

}

module.exports.StockHistory = (p) => {
    return new Promise(function myFn(resolve, reject) {

        var ps = new stockModel();
        ps.Product = p.StockHistory.Product;
        ps.Type = p.StockHistory.Type;
        ps.CurrentQuantity = p.StockHistory.CurrentQuantity;
        ps.Quantity = p.StockHistory.Quantity;
        ps.User = p.StockHistory.User;
        ps.CreatedAt = Date.now();

        ps.save(function resultHandle(error, result) {
            if (error) reject(false);
            else {

                if (p.New) {
                    return resolve(result);
                } else {

                    return new Promise(function myFn(resolve, reject) {
                        productModel.findByIdAndUpdate(p.Product._id, p.Product, function returnData(error, result) {
                            if (error) reject(false);
                            else resolve(result);

                        });

                    }).catch(error => {
                        return error;
                    });

                }


            }
        }).catch(error => {
            return error;
        })

    }).catch(error => {
        return error;
    });
}

module.exports.createProduct = (p) => {

    return new Promise(function myFn(resolve, reject) {
        var pm = new productModel();

        pm.Category = p.Category;
        pm.Name = p.Name;
        pm.Image = p.Image;
        pm.Stocks = p.Stocks;
        pm.Serials = p.Serials;
        pm.Price = p.Price;
        pm.Cost = p.Cost;

        pm.save(function resultHandle(error, result) {
            if (error) reject(false);
            else resolve(result);
        });

    }).catch(error => {
        return error;
    });


};

module.exports.bulkproductUpdate = (p) =>{

    return new Promise(function myFn(resolve,reject){
        var criteria ={
            _id : {$in : p.products}
        }
        console.log(p)
        productModel.updateMany(criteria,{Category: p.category},{multi:true},function returnData(error,result){
            if (error) reject(false);
            else resolve(result);
        });

    }).catch((error)=>{
        return error;
    })
    
}


module.exports.updateProduct = (p) => {

    return new Promise(function myFn(resolve, reject) {
        productModel.findByIdAndUpdate(p.Id, p, function returnData(error, result) {
            if (error) reject(false);
            else resolve(result);

        });

    }).catch(error => {
        return error;
    });


};


module.exports.deleteProduct = (p) => {

    return new Promise(function myFn(resolve, reject) {
        productModel.findByIdAndDelete(p.Id, function returnData(error, result) {

            if (error) reject(false);
            else resolve(result);


        })

    }).catch(error => {
        return error;
    });


}