var express = require('express');
var base64Img = require('base64-img');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var router = express.Router();
var path = require('path');

var data = base64Img.base64Sync('upload/file');



app.get('/', function (req, res) {
	res.sendFile(path.resolve('./file upload.html'));
});

app.post('/uploadfile', upload.single('file'), function (req, res, next) {
    console.log(req.file)
    if (req.file) {
     return res.json({isSuccess: true, file: req.file});
    } else {
    	res.json({isSuccess: false, message: 'Sorry'})
    }
});


app.listen(3000,function() {
	console.log('port 3000 is connected')
})