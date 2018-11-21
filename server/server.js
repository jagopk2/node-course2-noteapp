var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');



var app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.post('/todos',(req,res)=>{
  var todo = new Todo({
      text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    req.status(400).send(err);
  });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(err) =>{
        req.status(400).send(err);
    });
    
});
app.get('/todos/:id',(req,res)=>{
    var id =req.params.id;
    // res.send(req.params);
    Todo.findById(id).then((todo)=>{
        if(!todo){
          return  res.status(400).send('1');
        }
        res.send(todo);
    }).catch((e)=>{
        res.status(400).send('2');
    });
});

app.listen(port,()=>{
 console.log(`Server Started on port ${port}`);
}); 


module.exports = {app};