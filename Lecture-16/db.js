const MongoDb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let collection = '';
const dbName = 'todolist';
 

function  connect(cb){
    MongoDb.connect(url, function(err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        collection = db.collection('todocollection');
        cb();
      });
}

function insertDocs(task, cb){
    collection.insertMany([{a:task}], function(err, result){
       console.log(result);
       cb();
    });
}

function getTasks(cb){
  collection.find({}).toArray(function(err, result){
      cb(result);
  })
}

module.exports = {
    connect: connect,
    insertDocs: insertDocs,
    getTasks: getTasks
}
