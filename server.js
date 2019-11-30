'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer" here...

var multer = require("multer");
var upload = multer();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

////CODE GOES HERE////////////////////////////////////////////////////////////////////////////

///////////upload.single for uploading single file in multer.. for multiple files, use upload.array('fotos',12)
app.post("/api/fileanalyse", upload.single("uploadedFileName"), function(req, res, next) {
  const { originalname, mimetype, size } = req.file;
  return res.send({
    name: originalname,
    type: mimetype,
    size
  });
});