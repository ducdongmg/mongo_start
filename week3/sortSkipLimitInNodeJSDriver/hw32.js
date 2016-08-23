var MongoClient = require('mongodb').MongoClient,
    commandLineArgs = require('command-line-args'), 
    assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/hw32', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var projection = {"_id": 0, "student": 1};

    var cursor = db.collection('students').find();
    cursor.project(projection);
    cursor.limit(2);
    cursor.skip(6);
    cursor.sort([["grade", 1]]);
        
    var numMatches = 0;

    cursor.forEach(
        function(doc) {
            numMatches = numMatches + 1;
            console.log(doc.student ); 
        },
        function(err) {
            assert.equal(err, null);
            console.log("Documents displayed: " + numMatches);
            return db.close();
        }
    );

});


