const express = require('express');
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const dbUrl = ck.DATABASE;
const server = express();
var https = require('https');
var routes = require('./routes/routes');
const  mongoose = require('mongoose');
const cors =require('cors');

const multer = require('multer')
const path = require('path')

var os = require('os');

var ip = require('ip')
var fs = require('fs')
var options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

console.log(ip.address())
//important
server.use(express.urlencoded({extended: false}));

//important
server.use(cors({
    origin : "*"
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
server.use("/uploads",express.static('uploads'))


//imports routes
server.use(routes);

//start the server
/**https.createServer(options,server).listen(8080,ip.address()? ip.address() : 'localhost',function check(error){

    if(error) console.log('Invalid server configuration....');
  
    else console.log('Server is running at port 8080');
}) */



server.listen(8080,ip.address()? ip.address() : 'localhost',function check(error){

    if(error) console.log('Invalid server configuration....');
  
    else console.log('Server is running at port 8080');
})


//upload images

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:( req,file,cb)=>{
        console.log("file uploaded",file);
        cb(null,"img_" + file.originalname )
    },

})

const upload = multer({storage: storage})

server.post('/upload',upload.single('image'), (req,res)=> {
    res.send({"status": true, "message":'Image uploaded'});
});

