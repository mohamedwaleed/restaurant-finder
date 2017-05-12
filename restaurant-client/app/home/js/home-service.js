'use strict';


app.service('HomeService', ['$resource',
    function ($resource) {
    return $resource('https://maps.googleapis.com/maps/api/place/textsearch/json',{},{});
}]);