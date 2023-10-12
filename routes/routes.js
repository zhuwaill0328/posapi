var express = require('express');
const jwt = require('jsonwebtoken');

var router  = express.Router();
var categoryController = require('../src/category/categoryController');
var productController =require('../src/product/productController');
var userController =require('../src/user/userController');
var transactionController =require('../src/transaction/transactionController');
var gcashController = require('../src/gcash/gcashController');
var customerController =require('../src/customer/customerController');
var systemDetailsController = require('../src/system/systemController')

//customer controls

router.post("/customer/create",verifyToken,customerController.createCustomer);
router.get("/customer/get",verifyToken,customerController.getCustomers);
router.patch("/customer/update",verifyToken, customerController.updateCustomer);

//end

///gcash controls
router.post("/gcash/create",verifyToken,gcashController.createTransaction);
router.get("/gcash/get",verifyToken,gcashController.getTransactions);
router.patch("/gcash/update",verifyToken,gcashController.updateTransaction);

///end

//transaction controls

router.post("/transaction/create",verifyToken,transactionController.createTransaction);
router.get("/transaction/get",verifyToken,transactionController.getTransactions);
router.patch("/transaction/update",verifyToken,transactionController.updateTransaction);

//end   


//user controls
router.post("/user/create",verifyToken,userController.createUser);
router.get("/user/get",verifyToken,userController.getUsers);
router.patch("/user/update",verifyToken,userController.updateUser);
router.delete("/user/delete",verifyToken,userController.deleteUser);
router.post("/user/login",userController.login);

//end

//category controls
router.post("/category/create", verifyToken,categoryController.createCategory);
router.get("/category/get", verifyToken,categoryController.getCategories);
router.patch("/category/update", verifyToken,categoryController.updateCategory);
router.delete("/category/delete", verifyToken,categoryController.deleteCategory);
//end

//product controls

router.post('/product/create', verifyToken,productController.createProduct);
router.get('/product/get', verifyToken,productController.getProductList);
router.patch('/product/update', verifyToken,productController.updateProduct);
router.delete('/product/delete', verifyToken,productController.deleteProduct);
router.post('/product/stocks', verifyToken,productController.StockHistory);
router.get('/product/stockhistory', verifyToken,productController.getStockHistory);

//end

//system details
router.post('/system/save', verifyToken,systemDetailsController.saveSystemDetails);
router.get('/system/get', verifyToken,systemDetailsController.getSystemDetails);
router.patch('/system/update', verifyToken,systemDetailsController.updateSystemDetails);
//end

//authorization

function verifyToken(req,res,next){
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    //check if bearer is undefined

    if(typeof bearerHeader !== 'undefined'){
        //split at the space
        const Bearer = bearerHeader.split(' ');
        req.token = Bearer[1];
        next();

    }else{
        //Forbiden
        res.sendStatus(403);
    }

}
module.exports = router;