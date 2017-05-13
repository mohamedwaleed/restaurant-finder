'use strict';

var express = require('express');
var router = express.Router();
var restaurantDetailsService = require("./restaurantDetailsService");

router.get('/', function(req, res) {

  var placeId = req.query.placeId;
  var key = req.query.key;

  if(placeId === null || placeId === undefined) {
    res.send({success:false,msg: "place id parameter is not defined"});
  }
   if(key === null || key === undefined) {
      res.send({success:false,msg: "key parameter is not defined"});
   }
    var requestParams = "placeid=" + placeId + "&key=" + key;

    function onSuccess(data) {
        res.send({success:true,result: data});
    }

    function onFail() {
        res.send({success:false, msg: "Error in getting nearby restaurants"});
    }
    restaurantDetailsService.getPlaceDetails(requestParams, onSuccess, onFail);



});

module.exports = router;