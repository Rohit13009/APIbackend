const mysql = require("mysql");

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "personaldata",
    password : "15feb2021mysql"

})

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("database is conneted");
    }
})

module.exports = db;