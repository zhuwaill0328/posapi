var categoryService = require('./categoryService');
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const secret = ck.SECRETS;


var getCategories = async (req, res) => {

    try {

        jwt.verify(req.token, secret, async (err) => {

            if (err) res.sendStatus(403);
            else {

                var category = await categoryService.getCategories(req.body);
                res.send({ "status": true, "data": category });
            }

        })


    } catch (err) {
        res.send({ "status": false, "message": "Error getting category." })
    }
}

var createCategory = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) {
                res.sendStatus(403);
            } else {
                var status = await categoryService.createCategory(req.body);
                if (status) res.send({ "status": true, "message": "Category created." });
                else res.send({ "status": false, "message": "Creating category failed!!!" });

            }
        });
    } catch (err) {
        res.send({ "status": false, "message": "Error creating category." })
    }



}

var updateCategory = async (req, res) => {

    try {
        jwt.verify(req.token, secret, async (err) => {
            if (err) {
                res.sendStatus(403);
            } else {

                var status = await categoryService.update(req.body);

                if (status) res.send({ "status": true, "message": "Category updated." });
                else res.send({ "status": false, "message": "Updating category failed!!!" });

            }


        });
    } catch (err) {
        res.send({ "status": false, "message": "Error updating category." })
    }




}

var deleteCategory = async (req, res) => {

    try {
      jwt.verify(req.token,secret, async (err)=>{

        if(err) res.sendStatus(403);
        else{
            var status = await categoryService.delete(req.body);
            if (status) res.send({ "status": true, "message": "Category Deleted." });
            else res.send({ "status": false, "message": "Deleting category failed!!!" });
        }
      })

    } catch (err) {
        res.send({ "status": false, "message": "Error deleting category." });
    }
}



module.exports = { getCategories, updateCategory, deleteCategory, createCategory };