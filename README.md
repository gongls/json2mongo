# savejsontomongo
##一个直接把json插入到mongoDB里的库
##eg:

```
var savejsontomongo=require('savejsontomongo');
//config mongoDB
json2mongo.config({
  host:'localhost',
  port:27017,
  db:'test'
});
//set collection
savejsontomongo.set_collection('users');
//save a json to mongoDB

savejsontomongo.save({name:'jerry',age:18,sex:0},function(err,id){
  if(err){
    console.log('err:'+id);
  }else{
    console.log('insert id:'+id);
  }
});

//sava a json to mongoDB from a file
savejsontomongo.saveFormFile('tom.json',function(err,id){
  if(err){
    console.log('err:'+id);
  }else{
    console.log('insert id:'+id);
  }
});
```
