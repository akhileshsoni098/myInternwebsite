
const express = require('express') 

const route = require('./routes/route')

const mongoose = require('mongoose')

const app = express();

mongoose.set('strictQuery', false);

app.use(express.json())



mongoose.connect("mongodb+srv://Amityadav:Amit160419@cluster0.glxnckl.mongodb.net/group18Database",{useNewUrlParser:true})

.then(()=> console.log("DB is Connected"))

.catch(err => console.log(err))

app.use('/',route);

app.listen( 3000,function () {

    console.log("Express app running on port"+  3000)
    
})