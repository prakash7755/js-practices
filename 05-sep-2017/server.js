var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: '../uploads/' });
var router = express.Router();
var path = require('path');



app.get('/', function (req, res) {
	res.sendFile(path.resolve('./file upload.html'));
});

app.post('/uploadfile', upload.single('image'), function (req, res, next) {
console.log(req.file)
});


app.listen(3000,function() {
	console.log('port 3000 is connected')
})