var express = require('express');
var router = express.Router();
var restaurantListService = require("./restaurantListService");

router.get('/', function(req, res, next) {

  var type = req.query.type;
  var location = req.query.location;
  var radius = req.query.radius;
  var key = req.query.key;

  if(type == null || type == undefined) {
    res.send({success:false,msg: "Type parameter is not defined"});
  }
   if(location == null || location == undefined) {
      res.send({success:false,msg: "location parameter is not defined"});
    }
    if(radius == null || radius == undefined) {
        res.send({success:false,msg: "radius parameter is not defined"});
    }
   if(key == null || key == undefined) {
      res.send({success:false,msg: "key parameter is not defined"});
   }

    var requestParams = "type=" + type + "&location="+location + "&radius="+radius + "&key=" + key;

    restaurantListService.getNearbyRestaurants(requestParams, onSuccess, onFail);

    function onSuccess(data) {
        res.send({success:true,result: data});
    }

    function onFail() {
        res.send({success:false, msg: "Error in getting nearby restaurants"});
    }

});

module.exports = router;