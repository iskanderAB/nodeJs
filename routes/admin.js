const express = require("express");

const router = express.Router();

router.get('/add-product',(req, res, next)=> {
    res.send(`<form action='/admin/add-product' method='POST' name='form'> <input type='text' name='title'> <button type='submit'> submit </button></form>`);
});

router.post('/add-product',(req, res, next)=> { 
    console.log('request body ' , req.body)
    res.send(`<html> <h1> hello product </h1>`);
});

module.exports =  router; 
