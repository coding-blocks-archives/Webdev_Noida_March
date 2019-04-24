const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db');
const bodyParser = require('body-parser');

app.use('/', express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/todoList', (req, res)=>{
   // Database data 
   var task = req.query.q;
   var bool = req.query.b;
   db.insertData(task, bool, (data)=>{
       console.log(data);
       db.fetchList((data)=>{
        res.send(data);
      });
   })
});

app.get('/data', (req,res)=>{
   db.fetchData((data)=>{
       res.send(data);
   })
});

app.post('/update', (req,res)=>{
  let bool = req.body.bool;
  let id = req.body.id;
  db.updateData(bool, id, ()=>{
    res.sendStatus(200);
  })
})

app.post('/todo', (req,res)=>{
    let task = req.body.task;
    let bool = req.body.bool;
    try {
      db.insertData(task, bool, (data)=>{
        db.fetchList(task, (id)=>{
          res.send({task: task, id: id});
        })
      
      })
    }
    catch(e){
      console.error(e);
    }  
})

app.listen(port, () => {
  console.log(`working on port ${port}`);
  db.connectDb();
})

