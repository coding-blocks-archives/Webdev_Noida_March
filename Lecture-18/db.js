const mysql = require('mysql');
var connection = '';

function connectDb() {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'aayush',
        password : 'aa1234',
        database : 'todoList'
      });

      connection.connect();
}

function fetchList(name, cb) {
   connection.query(`Select id from todo where name= '${name}'`, function(err, result){
       if(err) throw err;
       cb(result);
   })
}

function fetchData(cb){
    connection.query(`Select * from todo`, function(err, result){
        if(err) throw err;
        cb(result);
    })
}

function insertData(task, bool,  cb){
    if(task === undefined || bool === undefined) return;
    connection.query(`INSERT INTO todo 
    (name, done) VALUES('${task}', 
    ${bool})`, function(err, result){
        if(err) throw err;
        cb(result);
    })
}

function updateData(bool, id, cb){
   connection.query(`UPDATE todo SET done=${bool} where id = ${id}`,function(err, result){
     if(err) throw err;  
     cb();
   } )
}

module.exports = {
    connectDb,
    fetchList,
    insertData,
    fetchData,
    updateData
}