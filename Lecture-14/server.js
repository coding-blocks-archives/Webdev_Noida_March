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
        var bod = JSON.parse(req.body);
        console.log(bod.todo);
       // tasks.push(req.body);
        res.sendStatus(200);

    }
    catch(e){
        res.sendStatus(200);
    }
  
});

app.get('/data', function(req,res){
    res.send(tasks);
})

app.listen(5000, function(){
    console.log('Server running on port 5000');
})
