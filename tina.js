var dbname = process.argv[2];
var url = "mongodb://localhost:27017/" + dbname;
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err,db) {
        if (err) throw err
        var users = db.collection('users');
        users.update(
	{ "name" : "Tina" },
	{ 
		$set: { "age": 40 }
	})
	db.close();
});
