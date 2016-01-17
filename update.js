var dbName = process.argv[2];
var mongo = require ('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+dbName;

mongo.connect (url, function (err, db)
{
   var p = db.collection ("users"); 
   p.update({ 
         username:"tinatime"
      } , { 
         $set:
      { age:40 }
         }, function(err, data) {
      // handle error
       if (err) console.log("Error.");    
      // other operations
      db.close ();
    });
});
