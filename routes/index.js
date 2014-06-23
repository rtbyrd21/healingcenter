var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Home',
    page: 'home'
  });
});

/* GET services page. */
router.get('/services', function(req, res) {
  var myServices = [];
  var entireList = [];
  entireList = appdata.services;
  appdata.services.forEach(function(item) {
    myServices = myServices.concat(item.title);
  });
  res.render('services', { 
    title: 'Services',
    services: myServices,
    list: entireList,
    page: 'servicesList'
  });
});

/* GET services detail page. */
router.get('/services/:servicesid', function(req, res) {
  var myServices = [];
  var entireList = [];
  
  appdata.services.forEach(function(item){
    if (item.shortname == req.params.servicesid){
      entireList.push(item);
      myServices = myServices.concat(item.title);
      
    }
  });
  res.render('services', { 
    title: 'Services',
    services: myServices,
    list: entireList,
    page: 'servicesDetail'
  });
});

module.exports = router;
