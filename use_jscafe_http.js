var jscafe = require('./jscafe_http');

// ここがコールバック呼び出しの部分。
jscafe.request('http://atnd.org/events/37045', function(e,res){
 if(e) {console.error(e); }
 console.log(res);
});
