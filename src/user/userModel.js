const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new  Schema({

    Name:{
        Firstname: {
            type:String,
            required: true,
        },
        Lastname: {
            type: String,
            required: true,
        }
    },
    Phone:{
        type: String,
        required: true
    },
    Username:{
        type: String,
        required:true,
        unique:true 
    },
    Password:{
        type: String,
        required:true
    },
    Status:{
        type:String,
        default:'Active',
        required: true
    },
    Role:{
        type: String,
        default: 'Standard',
        required: true
    },
    Pin:{
        type: String
    }



});


module.exports = mongoose.model('User',userSchema);