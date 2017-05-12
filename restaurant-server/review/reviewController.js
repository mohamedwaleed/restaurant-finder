var express = require('express');
var router = express.Router();
var restaurantDetailsService = require("./reviewService");

router.post('/', function(req, res, next) {

    var data = req.body;
    if(data === undefined || data == null){
        onFail();
    }
    function onSuccess() {
         res.send({success:true});
    }
    function onFail() {
        res.send({success:false});
    }

    restaurantDetailsService.saveReview(data, onSuccess, onFail);

});

router.get('/:placeId', function(req, res, next) {

    var placeId = req.params.placeId;
    if(placeId === undefined || placeId == null || placeId === ""){
        onFail();
    }
    function onSuccess(data) {
         res.send({success:true, result: data});
    }
    function onFail() {
        res.send({success:false});
    }

    restaurantDetailsService.getPlaceReviews(placeId, onSuccess, onFail);

});


module.exports = router;