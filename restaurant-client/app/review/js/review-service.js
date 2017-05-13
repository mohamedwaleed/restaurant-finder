'use strict';
/* global returantFinderApp */


returantFinderApp.service('ReviewService', ['$resource', 'BASE_URL' ,
    function ($resource, BASE_URL) {
    return $resource(BASE_URL + '/restaurant/review/:placeId',{},{});
}]);