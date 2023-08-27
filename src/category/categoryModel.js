const mongoose =require('mongoose');
var Schema = mongoose.Schema;

var categorySchema =new Schema({

    Name:{
        type: String,
        required: true,
        unique:true
    }
});

module.exports = mongoose.model('Category',categorySchema);