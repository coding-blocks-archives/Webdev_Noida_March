const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const db = require('./db');
let tasks = [];

app.use('/', express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());
/**
 * @endppoint add: Adding item into tasks array
 */
app.post('/add', function(req,res){
    try{
        var bod = req.body;
        console.log(req.headers);
        console.log(req.body);
        tasks.push(req.body.todo);
        db.insertDocs(req.body.todo, function(){
            res.send(req.body.todo);
        });
      

    }
    catch(e){
        console.log(e);
        res.sendStatus(200);
    }
  
});

app.get('/data', function(req,res){
    res.send(tasks);
})


app.post('/del', function(req, res){
   let index = req.body.id;
   tasks.splice(index,1);
   res.send(tasks);
});

app.get('/tasks', function(req,res){
  db.getTasks(function(result){
      res.send(result);
  })
});

function refilling(){
    db.getTasks(function(result){
        result.forEach(function(i){
            tasks.push(i.a);
        })
    })
    
}

app.listen(5000, function(){
    console.log('Server running on port 5000');
    db.connect(function(){
        refilling();
    });
})
