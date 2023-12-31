var express = require('express');

const bodyParser = require("body-parser");

const markdownit = require('markdown-it');

var router = express.Router();



router.use(bodyParser.json());



router.get('/api/getconvertmkdwn', function(req, res, next) {
  res.status(200).json({data: "hi tahnkyou"})
});

/* GET users listing. */
router.post('/api/convertmkdwn', function(req, res, next) {
  const toConvertMkdwnText = req.body
  const md = markdownit()
  console.log("toCOnvert",toConvertMkdwnText.text)
  const result = md.render(toConvertMkdwnText.text);
  res.status(200).json({result, success:true})
  // if(toConvertMkdwnText.length==0) {
  //   res.status(400).json({error:"Markdown text cannot be empty"})
  // } else {
  
  // }
});

module.exports = router;
