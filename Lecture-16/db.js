const MongoDb = require('mongodb').MongoClient;
const username = 'aayush';
const password = 'abc123';
const url = `mongodb://${username}:${password}@ds145456.mlab.com:45456/todolist`;
let collection = '';
const dbName = 'todolist';
 

function  connect(){
    MongoDb.connect(url, function(err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        collection = db.collection('todocollection');
      });
}

function insertDocs(task, cb){
    collection.insertMany([{a:task}], function(err, result){
       console.log(result);
       cb();
    });
}

module.exports = {
    connect: connect,
    insertDocs: insertDocs
}
