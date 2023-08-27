const express = require('express');
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const dbUrl = ck.DATABASE;
const server = express();
var routes = require('./routes/routes');
const  mongoose = require('mongoose');
const cors =require('cors');

//important
server.use(express.urlencoded({extended: false}));

//important
server.use(cors({
    origin : "http://localhost:4200"
},
{
    origin : "http://192.168.2.105:4200"
}
))

//Connect to mongodb
mongoose.set('strictQuery',true);
mongoose.connect(dbUrl,{useNewUrlParser: true,useUnifiedTopology: true},)
.then(()=> console.log('Database connected....'))
.catch(()=> {
    console.log("Error connecting to database server....");
});


//Important
server.use(express.json());

//imports routes
server.use(routes);

//start the server
server.listen(8080 ,function check(error){
    if(error) console.log('Invalid server configuration....');
  
    else console.log('Server is running at port 8080');
})
