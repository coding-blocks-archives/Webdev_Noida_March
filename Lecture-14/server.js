const express = require('express');
var bodyParser = require('body-parser')
const app = express();
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
        res.sendStatus(200);

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

app.listen(5000, function(){
    console.log('Server running on port 5000');
})
