const mongoose = require('mongoose');

var Schema = mongoose.Schema;


var gcash = new Schema({

    Customer: {
        Name: {
            type:String,
            default:"Walk in",
            required:true
        },
        Phone:{
            type:String,
            requried:true
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
        },
        Phone:{
            type:String,
            requried:true
        }

    },
    Date:{
        type: Date,
        default: Date.now(),
        required:true
    },
    Status:{
        type:String,
        default:'Complete',
        required:true
    },
    TransactionType:{
        type:String,
        required:true
    },
    ReferenceNumber:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    TransactionFee:{
        type:Number,
        required:true
    },
    CurrentUser: {
        type:String,
        required: true
    },
    FeeDeducted: {
        type:Boolean,
        required: true,
        default:false
    }
    



});

module.exports = mongoose.model('gcashtransaction',gcash);