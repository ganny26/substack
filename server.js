const express = require('express');

const PORT = 8012;

var app = express();

//access css files



app.set('port',process.env.PORT || PORT);



app.get('/',function(req,res){
	res.send('index');
});


app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);



