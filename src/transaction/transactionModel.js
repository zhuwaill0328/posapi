const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var transaction = new Schema({

    Customer: {
        Name: {
            type:String,
            default:"Walk in",
            required:true
        }
    },
    User:{
        Name:{
            type:String,
            required:true
        },
        Role:{
            type:String,
            required:true
        }

    },
    Date:{
        type: Date,
        required:true
    },
    Payment:{
        Amount:{
            type:Number,
            required:true
        },
        Discount:{
            type:Number,
            default:0,
            required: true
        },
        Type:{
            type:Number,
            default:0,
            required:true
        },
        Total:{
            type:Number,
            default: 0,
            required:true
        }

    },
    Status:{
        type:String,
        default: 'Unpaid',
        required:true
    },
    Cart: {
        type:Array
    }


});


module.exports = mongoose.model('transaction',transaction);