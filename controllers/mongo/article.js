var db_mongo = 'putra';
module.exports = function(app){
    app.get('/api/article',function(req,res){
    var note = {'Get All Content Async':'http://localhost:3000/api/getUser_async',
                'Get All Content Sync':'http://localhost:3000/api/getUser',
                'Get ById':'http://localhost:3000/api/getUser/:id'}
    res.json(note)
    }),
    

//Putra Create Collection
    app.get('/api/article/create_col',function(req,res){
        const MongoClient = require('mongodb').MongoClient;
      
        const url = 'mongodb://localhost:27017';
          // Use connect method to connect to the server

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(db_mongo);
          dbo.createCollection("customers", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
          })
        })
       
}),
//Putra Insert Collection
app.get('/api/article/insert_col',function(req,res){
  const MongoClient = require('mongodb').MongoClient;
  const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(db_mongo);
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
 
}),
//Putra getall Collection
app.get('/api/article/getall_col',function(req,res){
  const MongoClient = require('mongodb').MongoClient;
  const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(db_mongo);
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}),
// QUERY LIKE OPERATOR OR
app.get('/api/article/getNameOr_col',function(req,res){
  const MongoClient = require('mongodb').MongoClient;
  const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(db_mongo);
    var id = 7;
    var reg = new RegExp(id, 'i')
    var query = {$or:[{name:reg},{address:reg}]};
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}),
// QUERY LIKE OPERATOR AND
app.get('/api/article/getNameAnd_col',function(req,res){
  const MongoClient = require('mongodb').MongoClient;
  const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(db_mongo);
    var id = 7;
    var reg = new RegExp(id, 'i')
    var query = {name:reg,address:reg};
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
})
}
