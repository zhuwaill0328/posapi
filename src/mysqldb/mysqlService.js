const mysql =require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345',
    database:'pos_system'
})

module.exports.InsertToCartHistory = (item) => {

    console.log(item.listofItems)
    return new Promise(function checkURL(resolve,reject){

        db.connect(function(err){
            if(err) reject(false);
            var query = "INSERT INTO cart_sold_history (item_id,name,category,qty,s_price,a_price,discount,date,status) values ?"
            var items = item.listofItems;

            db.query(query,[items],function(error,result){

                if(error) reject(false);
                
                else resolve(result);
            })
        })

    }).catch(error => {
        return error
    })
}

module.exports.getData = (body) => {

    return new Promise(function checkURL(resolve,reject){

        var query = body.query
        var parameters = body.parameters

        db.query(query,parameters,function(error,result){
            //console.log(result)
            //console.log(error)
            if(error) reject(false);
            
            else resolve(result);
        })
        

    }).catch(error => {
        return error
    })
}