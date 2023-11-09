const express = require('express');
var jwt = require('jsonwebtoken');
const ck = require('ckey');
const dbUrl = ck.DATABASE;
const server = express();
var routes = require('./routes/routes');
const  mongoose = require('mongoose');
const cors =require('cors');

const multer = require('multer')
const path = require('path')



//important
server.use(express.urlencoded({extended: false}));

//important
server.use(cors({
    origin : "*"
},
{
    origin : "http://192.168.254.101:4200"
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
server.listen(8080 ,function check(error){
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

