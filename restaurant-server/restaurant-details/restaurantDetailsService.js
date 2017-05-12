var https = require('https');

var restaurantDetailsService =  (function () {
    var publicApi = {
        getPlaceDetails: function(apiRequestParams, onSuccess, onFail) {
                var path =  '/maps/api/place/details/json?' + apiRequestParams;
                var httpHost = "https://maps.googleapis.com";
                httpAddress = httpHost + path;
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
                request.on("error", function(error){
                    if(onFail){
                        onFail();
                    }
                });
        }
    };
    return publicApi;
})();

module.exports = restaurantDetailsService;
