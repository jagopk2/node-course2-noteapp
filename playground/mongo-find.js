const {MongoClient,Objectid} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err)
    {
        return console.log('Unable to connect to the mongoDataBase');
    }
    const db = client.db('TodoApp');
    db.collection('TodoApp').find().toArray().then((docs)=>{
        console.log('TODOS');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch the documents',err);
    });
    client.close();
});
