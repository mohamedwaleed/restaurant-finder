'use strict';

var express = require('express');
var router = express.Router();
var restaurantDetailsService = require("./reviewService");

router.post('/', function(req, res) {

    var data = req.body;

    function onSuccess() {
         res.send({success:true});
    }
    function onFail() {
        res.send({success:false});
    }
    if(data === undefined || data === null){
        onFail();
    }


    restaurantDetailsService.saveReview(data, onSuccess, onFail);

});

router.get('/:placeId', function(req, res) {

    var placeId = req.params.placeId;

    function onSuccess(data) {
        res.send({success:true, result: data});
    }
    function onFail() {
        res.send({success:false});
    }
    if(placeId === undefined || placeId === null || placeId === ""){
        onFail();
    }


    restaurantDetailsService.getPlaceReviews(placeId, onSuccess, onFail);

});


module.exports = router;