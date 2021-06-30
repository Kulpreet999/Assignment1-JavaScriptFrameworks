
var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Portfolio' });
});

/* GET about page. */
router.get('/about', function (req, res) {
    res.render('about',{title:'About the page'});
});
    
/* GET contact page. */
router.get('/contact', function (req, res) {
    res.render('contact',{title:'Contact Me'});
});

/* GET project page. */
router.get('/project', function (req, res) {
    res.render('project',{title:'project'})
});
    
		
module.exports = router;
