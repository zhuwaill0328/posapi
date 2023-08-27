const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new Schema({

    Name:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        unique:true,
        required:true
    },
    Address:{
        type:String,
        
    }


});


module.exports = mongoose.model('customer',customerSchema);