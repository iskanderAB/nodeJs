const express = require('express');

const router = express.Router();

router.get('/',(req, res, next)=> { 
    console.log("hello iskander i'am another  meddeleware ! ");
    res.send(`<html> <h1> hello iskander </h1>`);
});

module.exports = router;
