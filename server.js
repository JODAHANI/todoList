const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = 8080;


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/js'));
app.set('view engine', 'ejs');

let db;
MongoClient.connect('mongodb+srv://master:whgksk12@cluster0.exq1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useUnifiedTopology: true }, function(에러, client){
  if (에러) return console.log(에러);
  db = client.db('todoapp');
  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })
})
app.get('/', (req, res) => {
  res.render('home.ejs');
})

app.get('/todolist', (req, res) => {
  db.collection('post').find().toArray((err,result) => {
    console.log(result)
    res.render('todolist.ejs',{list : result});  
  })
})
app.post('/todolistadd', (req, res) => {
  db.collection('counter').findOne({name : "total"},function(err,result){
    let total = result.total;
    db.collection('post').insertOne({ _id : total + 1, title : req.body.title},function(err,result) {
      db.collection('counter').updateOne({name : "total"},{$inc : {total : 1}},function(err,result) {
        console.log("Clear ✅");
        res.redirect('/todolist');
      });    
    });
  });
})

app.get('/edit/:id', (req,res) => {
  db.collection('post').findOne({ _id: parseInt(req.params.id)}, (err,result) => {
    console.log(result)
    res.render('edit.ejs',{todo : result});
  })
});

app.put('/edit', (req,res) => {
  db.collection('post').updateOne({_id: parseInt(req.body.id)},{$set : {title: req.body.title}}, (err,result) => {
    console.log('Update Success');
    res.redirect('/todolist');
  })
})

app.delete('/delete', (req, res) => {
  req.body._id = parseInt(req.body._id);
  console.log(req.body._id,req.body);
  db.collection('post').deleteOne({_id: req.body._id}, (err, result) => {
      console.log("Delete✅");
      res.status(200).send({ message : "성공했습니다!"});
  });
});

app.get('/calender', (req, res) => {
  res.render('calender.ejs');
})

app.get('/calculator', (req, res) => {
  res.render('calculator.ejs');
})


