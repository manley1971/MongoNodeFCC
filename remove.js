var dbName = process.argv[2];
var mongo = require ('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+dbName;

mongo.connect (url, function (err, db)
{
   var p = db.collection (process.argv[3]); 
   p.remove({ 
         _id:process.argv[4]
      } , function(err, data) {
      // handle error
       if (err) console.log("Error.");    
      // other operations
      db.close ();
    });
});
