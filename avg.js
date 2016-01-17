var size = process.argv[2];
var mongo = require ('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect (url, function (err, db)
{
   var p = db.collection ('prices');
   p.aggregate([
      { $match: { size:size }}
    , { $group: {
        _id: 'total' // This can be an arbitrary string in this case
      , total: {
          // $sum is the operator used here
          $avg:"$price"
        }
      }}
    ]).toArray(function(err, results) {
      console.log(Number(results[0].total).toFixed(2));
      db.close();
    }
	       );
});

