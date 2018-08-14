var express = require('express');
var router = express.Router();

var messages = [];

// 最終的にmessagesを返す。
router.get('/', function(req, res, next){

 // postした時にはreq.bodyの中に値が入ってる。
 var message = req.body.message;
 // 値が存在したらmessagesにpushする。
 if (message) messages.push(message);

 res.render('bbs', { title:'Express-sample', messages: messages });
});

router.post('/', function(req, res, next){
 
 // postした時にはreq.bodyの中に値が入ってる。
 var message = req.body.message;
 // 値が存在したらmessagesにpushする。
 if (message) messages.push(message);

 res.render('bbs', { title:'Express-sample', messages: messages });
});

module.exports = router;