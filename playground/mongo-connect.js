const {MongoClient,Objectid} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err)
    {
        return console.log('Unable to connect to the mongoDataBase');
    }
    const db = client.db('TodoApp');
    db.collection('TodoApp').insertOne({
        text:'Something To Do',
        Completed: false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert in Todos');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
});
