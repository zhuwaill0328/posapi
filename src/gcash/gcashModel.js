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
        required:true
    },
    Status:{
        type:String,
        default:'Complete',
        required:true
    },
    TransactionType:{
        type:String,
        enum:['CASHIN','CASHOUT'],
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
    AmountDue:{
        type:Number,
        required:true
    }
    



});

module.exports = mongoose.model('gcashtransaction',gcash);