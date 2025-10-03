//import library mysql
let mysql = require('mysql');

//konfigurasi database
let connection = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'db_express_api'
 });

//cek koneksi database
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connection Succuessfully!');
   }
 })

module.exports = connection; //agar dapat digunakan di file lain