
const mongoose = require('mongoose');
var Schema = mongoose.Schema;




var stockHistory = new Schema({

    Product: {
        Id: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
    },
    Type: {
        type: String,
        required: true
    },
    CurrentQuantity: {
        type: Number,
        requried: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    User: {
        Name: {
            type: String,
            required: true
        },
        Role: {
            type: String,
            required: true
        }
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    }


});

module.exports = mongoose.model('StockHistory', stockHistory);