var service = require('./productService');


var jwt = require('jsonwebtoken');
const ck = require('ckey');
const secret = ck.SECRETS;

var getStockHistory =async (req,res)=>{
    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {

                var history = await service.getStockHistory(req.body);
                res.send({ "status": true, "data": history });
            }

        })
    } catch (err) {
        res.send({ "status": true, "message": err });
    }
}

var getProductList = async (req, res) => {
    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {

                var product = await service.getProducts(req.body);
                res.send({ "status": true, "data": product });
            }

        })
    } catch (err) {
        res.send({ "status": true, "message": "Error getting product list" });
    }
}

var createProduct = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await service.createProduct(req.body);
                if (status) res.send({ "status": true, "message": "Product created." ,"data" : status });
                else res.send({ "status": false, "message": "Failed to add product!"});

            }
        })
    } catch (err) {
        res.send({ "status": true, "message": "Error creating product" })
    }
}

var StockHistory = async( req,res) =>{
    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await service.StockHistory(req.body);
                if (status) res.send({ "status": true, "message": "Stock updated." });
                else res.send({ "status": false, "message": "Updating stock failed!!!" });

            }
        })
    } catch (err) {
        res.send({ "status": true, "message": "Error updating product stocks." })
    }
}


var updateProduct = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await service.updateProduct(req.body);
                if (status) res.send({ "status": true, "message": "Product updated." });
                else res.send({ "status": false, "message": "Updating product failed!!!" });

            }
        })
    } catch (err) {
        res.send({ "status": true, "message": "Error updating product." })
    }

}

var deleteProduct = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) res.sendStatus(403);
            else {
                var status = await service.deleteProduct(req.body);
                if (status) res.send({ "status": true, "message": "Product deleted." });
                else res.send({ "status": false, "message": "Deleting product failed!!!" });

            }
        })
    } catch (err) {

    }
}


module.exports = { getProductList, updateProduct, deleteProduct, createProduct,StockHistory,getStockHistory };