const mongoose = require('mongoose');
var Schema = mongoose.Schema;



var productSchema = new Schema({

    Name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Stocks: {

        Quantity: {
            type: Number,
            default: 1,
            required: true
        },
        Soldby: {
            type: String,
            required: true,
        },
        Weight: {
            type: Number,
            default: 0,
            required: true,
        },
        Threshold: {
            type: Number,
            default: 1,
            required: true
        },
        UnitofMeasurement: {
            type: String,
            default: "None",
            required: true
        }

    },
    Serials: {
        Barcode: {
            type: String,
            unique: true
        },
        SKU: {
            type: String
        }
    },

    Price: {
        type: Number,
        required: true

    },
    Cost: {
        type: Number,
        required: true,

    },
    Essentials: {
        type: Boolean,
        default : false
    }

});

module.exports = mongoose.model('Product', productSchema);
