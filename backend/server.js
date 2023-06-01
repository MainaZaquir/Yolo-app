const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

let mongodb_url = 'mongodb://localhost/';
let dbName = 'yolomy';

const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true  } )
let db = mongoose.connection;

db.once('open', ()=>{
    console.log('Database connected successfully')
})

db.on('error', (error)=>{
    console.log(error);
})

const app = express()

app.use(express.json())

app.use(upload.array()); 

app.use(cors());

app.use('/api/products', productRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
