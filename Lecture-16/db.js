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

        insertDocs();
      });
}

function insertDocs(){
    collection.insertMany([{a:1}, {b:2}, {c:3}], function(err, result){
       console.log(result);
    });
}

module.exports = {
    connect: connect
}
