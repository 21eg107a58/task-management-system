var express = require('express');
var router = express.Router();


ctrlothers=require('../controller/others');

router.get('/login',ctrlothers.login);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Destination',ctrlothers.Destination);

router.get('/about',ctrlothers.about);


router.get('/paris',ctrlothers.paris);

router.get('/contact',ctrlothers.contact);
router.get('/bali',ctrlothers.bali);
router.get('/india',ctrlothers.india);

module.exports = router;
