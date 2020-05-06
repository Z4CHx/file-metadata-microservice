'use strict';

var express = require('express');
var cors = require('cors');
var formidable = require('formidable')

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', function(req, res){
  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }
    console.log('Fields', fields)
    console.log('Files', files.upfile.size)
    res.json({size: files.upfile.size})
    for (const file of Object.entries(files)) {
      // console.log('entries', file)
    }
  })
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
