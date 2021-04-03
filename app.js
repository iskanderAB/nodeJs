const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');

console.log("server started ...");

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req, res, next)=> {
    res.send(`<form action='/product' method='POST' name='form'> <input type='text' name='title'> <button type='submit'> submit </button></form>`);
});

app.use('/product',(req, res, next)=> { 
    console.log('request body ' , req.body)
    res.send(`<html> <h1> hello product </h1>`);
});


app.use('/',(req, res, next)=> { 
    console.log("hello iskander i'am another  meddeleware ! ");
    res.send(`<html> <h1> hello iskander </h1>`);
});
app.listen(3000);
