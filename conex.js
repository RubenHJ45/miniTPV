const mysql = require('mysql');
const conex = mysql.createConnection({
   host:'localhost',
   user:'root',
   password: '',
   database:'tienda_kairos'

});

conex.connect((err) =>{
   if(err) throw err
   console.log('La conexion esta establecida');
});

conex.query('SELECT * FROM clientes', (err, rows) =>{
    if(err) throw err
    console.log(rows)
})

conex.end();