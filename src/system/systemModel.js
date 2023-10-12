const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var system = new Schema({

    Company: {
        type:String,
        required:true
    },
    GcashRates: {
        type:Array,
        required:true
    }
   
});


module.exports = mongoose.model('system',system);