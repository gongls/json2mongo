MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var fs = require('fs');
//mongoUrl = 'mongodb://localhost:27017/snailpi';
var savejsontomongo={
  config:function(config){
    this.mongoUrl='mongodb://'+config.host+':'+config.port+'/'+config.db;
  },
  set_collection:function(collection){
    this.collection=collection;
  },
  save:function(jsonObj,callback){
    var collection=savejsontomongo.collection;
    var mongoUrl=savejsontomongo.mongoUrl;
    MongoClient.connect(mongoUrl, function (err, db) {
      assert.equal(null, err);
            db.collection(collection).insertOne(jsonObj, function (err, result) {
                assert.equal(err, null);
                //callback(result);
                if(err){
                  callback(true,"err");
                }else{
                  callback(false,result.ops[0]._id);
                }
                db.close();
            });
    });
  },
  saveFormFile:function(json_file,callback){
    var save=this.save;
    fs.readFile(json_file,function(err, data){
       if(err){
         callback(true,"err");
       }else{
         var json=JSON.parse(data.toString());
         //console.log(save.toString());
         save(json,callback);
       }
    });
  }
}
module.exports=savejsontomongo;
