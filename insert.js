var firstName = JSON.stringify(process.argv[2]);
var lastName = JSON.stringify(process.argv[3]);
var mongo = require ('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect (url, function (err, db)
{
   var objToInsert = {firstName:process.argv[2],lastName:process.argv[3]};
   var p = db.collection ('docs'); 
   p.insert(objToInsert, function(err, data) {
      // handle error
       if (err) console.log("Error in insert.");    
      // other operations
      db.close ();
    });
   console.log(JSON.stringify(objToInsert));
});
