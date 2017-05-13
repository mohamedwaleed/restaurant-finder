'use strict';

/* global returantFinderApp */

returantFinderApp.service('RestaurantDetailsService', ['$resource', 'BASE_URL' ,
    function ($resource, BASE_URL) {
    return $resource(BASE_URL + '/restaurant/details',{},{});
}]);