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
    Username: {
        type:String,
        required:true
    },
    Transaction:{
       Id:{
        type: String,
        required: true
       },
       Date:{
        type:Date,
        required: true
       },
       Balance: {
        type:Number,
        required:true
       },
       Amount:{
        type: Number,
        required: true
       },
       PaymentHistory:{
           type:Array
       }
    },
    Status:{
        type:String,
        required:true,
        default: 'Unpaid'
    }
    




})

module.exports = mongoose.model('debit',debitSchema)