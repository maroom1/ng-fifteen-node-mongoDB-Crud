const MongoObject = require('mongodb').ObjectID;

module.exports = function(app,db) {
    app.post('/notes',(req,res)=>{
        // console.log(req.body);
        // res.send('Hello');
        const note= {text: req.body.body,title:req.body.title};
    
        db.collection('notes').insertOne(note,(err,result)=>{
            if(err) {
                res.send({"error":"Ann error has occured"}); 
            } else {
                res.send(result.ops[0])
            }
        });
    });

    app.get('/notes/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id);
        const details={};
        details._id=new MongoObject.ObjectID(id);
        console.log(details);
        db.collection('notes').findOne(details,{ },(err,item)=>{
            if(err) {
                res.send({"error":"error occured"});
            } else {
                try{
                res.send(item)
                } catch(e) {
                    console.log(e);
                }
            }
        })
    });

    app.delete('/notes/title/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id);
        const details={};
        details.title=id;
        console.log(details);
      
        db.collection('notes').deleteOne(details,(err,item)=>{
            if(err) {
                res.send({"error":"error occured"});
            } else {
                res.send(item);
            }
        })
    });

    app.delete('/notes/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id);
        const details={};
        details._id=new MongoObject.ObjectID(id);
        console.log(details);
      
        db.collection('notes').deleteOne(details,(err,item)=>{
            if(err) {
                res.send({"error":"error occured"});
            } else {
                res.send(item);
            }
        })
    });





    app.put('/notes/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id);
        const details={};
        details._id=new MongoObject.ObjectID(id);
        console.log(details);
          const note= {text: req.body.body,title:req.body.title};
          console.log(note)

        db.collection('notes').update(details,note,(err,item)=>{
            if(err) {
                res.send({"error":"error occured"});
            } else {
                res.send(item)
            }
        })
    });


};