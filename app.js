const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop')
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use('/admin',adminRouter);
app.use(shopRouter);
app.use((req,res,next)=>{
    res.status(404).send("<html> <h1> 404 not found </h> <html>")
})
app.listen(3000);
