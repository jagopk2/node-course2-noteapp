const {MongoClient,Objectid} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err)
    {
        return console.log('Unable to connect to the mongoDataBase');
    }
    const db = client.db('TodoApp');
    db.collection('TodoApp').findOneAndUpdate({Completed:false},{
        $set: {
            Completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })
    // client.close();
});
