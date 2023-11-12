const mongoose = require('mongoose')
var Schema = mongoose.Schema;


var debitSchema = new Schema({

    Customer:{
        Name: {
            type:String,
            required:true
        },
        Phone: {
            type: String,
            required:true
        },
        Id: {
            type:String,
            requried:true
        }
    },
    User: {
        Name: {
            type:String,
            required:true
        },
        Phone: {
            type: String,
            required:true
        }
    },
    Transaction:{
       Id:{
        type: String,
        required: true
       },
       Date:{
        type:Date,
        requried:true,
        default: Date.now()
       },
       Amount:{
        type: Number,
        required: true
       }

    },
    PaymentHistory:{
        Date:{
            type:Date,
            requried:true,
            default: Date.now()
        },
        Amount:{
            type:Number,
            required:true
        },
        User:{
            type:String,
            required:true
        }

    }
    ,
    Status:{
        type:String,
        required:true,
        default: 'Unpaid'
    }
    




})

module.exports = mongoose.model('Debit',debitSchema)