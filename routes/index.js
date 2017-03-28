var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brennan-File-Metadata-Microservice' });
});

var upload = upload.single('file');
router.post('/myaction', upload, function (req, res, next) {
  var details = req.file;
	console.log(details);
  res.json({
		uploaded_file: {
			original_name: details.originalname,
			size: details.size
		}
	});
});
module.exports = router;
