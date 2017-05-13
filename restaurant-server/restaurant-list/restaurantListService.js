'use strict';

var https = require('https');

var restaurantListService =  (function () {
    var publicApi = {
        getNearbyRestaurants: function(apiRequestParams, onSuccess, onFail) {
                var path =  '/maps/api/place/nearbysearch/json?' + apiRequestParams;
                var httpHost = "https://maps.googleapis.com";
                var httpAddress = httpHost + path;
                var request = https.get(httpAddress, function(response) {
                     var data = "";
                     response.on('data', function(chunk){
                        data += chunk;
                     });
                     response.on('end', function(){
                        if(onSuccess){
                            onSuccess(JSON.parse(data));
                        }
                     });
                });

                //handle http errors
                request.on("error", function(){
                    if(onFail){
                        onFail();
                    }
                });
        }
    };
    return publicApi;
})();

module.exports = restaurantListService;
