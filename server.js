const express = require('express');
const MongoCLient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./server-app/config/db');

const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({extended: true}));

MongoCLient.connect(db.url,(err,client)=>{
    var db=client.db('notable123');
    if(err){
    return console.log(err);
    }
    require('./server-app/routes')(app,db);
    app.listen(port, ()=> {
        console.log("we are live on : "+ port);
    })

})


//CRUD operations start
  







