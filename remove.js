var dbname = process.argv[2];
var cname = process.argv[3];
var id = process.argv[4];
var del = {
_id: id
}

var url = "mongodb://localhost:27017/" + dbname;
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err,db) {
        if (err) throw err
        var coll = db.collection(cname);
        coll.remove({ _id: id });
	db.close();
});
