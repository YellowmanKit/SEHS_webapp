'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017';

// Database Name
var dbName = 'mydb';

// Use connect method to connect to the server

var connect = exports.connect = function connect(callback) {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    var db = client.db(dbName);
    client.close();

    return callback(err, db);
  });
};
//# sourceMappingURL=database.js.map