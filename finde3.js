var age = parseInt (process.argv[2]);
var mongo = require ('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect (url, function (err, db)
	       {
	       var p = db.collection ('parrots'); 
	       p.find (
			      {
  age:			      {
  $gt:			      age}
			      }
	       ).toArray (function (err, docs)
			  {
 console.log(docs);
 db.close ();
}
	       )}

);
