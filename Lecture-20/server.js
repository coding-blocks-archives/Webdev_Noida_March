const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'template'));

app.get('/', (req,res)=>{
    res.render('index', {todo: {
            name: 'arora',
            author: [{
                name: 'aayush',
                class: 'A'
            },
            {
                class: 'B'
            },
            {
                name: 'shyam',
                class: 'A'
            }],
            price: 200
        }
    })
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
})