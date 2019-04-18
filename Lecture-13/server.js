const express = require('express');
const app = express();
let tasks = [];
app.use('/', express.static('public'));
/**
 * @endppoint add: Adding item into tasks array
 */
app.get('/add', function(req,res){
    try{
        console.log(req.query);
        tasks.push(req.query.q);
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
