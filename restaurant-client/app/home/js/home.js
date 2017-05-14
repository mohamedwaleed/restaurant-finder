'use strict';
/* global returantFinderApp */

returantFinderApp.controller('HomeCtrl', ['HomeModel', '$scope', '$anchorScroll' , '$location',
 function (HomeModel, $scope, $anchorScroll, $location) {
	$scope.isLoading = true;
	$scope.nearbyResturants = [];
	function getNearbyResturantsToMyLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(getPosition, error);
	    } else {
	        console.log('Geolocation is not supported by this browser.');
	    }
	}
	function error() {
		// get restaurants around default location
		HomeModel.getNearbyResturants(29.99382, 31.16988, onSuccess, onFail);
		$scope.nearbyResturants = HomeModel.nearbyResturants;
		
	}
	function getPosition(position) {
	    HomeModel.getNearbyResturants(position.coords.latitude, position.coords.longitude, onSuccess, onFail);	    
	}
	function onSuccess(data) {
		$scope.nearbyResturants = data;
		$scope.isLoading = false;
	}
	function onFail() {
		$scope.isLoading = false;
	}

    $scope.autocomplete = '';
    $scope.latitude = '';
    $scope.longitude = '';
    $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
      var location = $scope.autocomplete.getPlace().geometry.location;
      $scope.latitude = location.lat();
      $scope.longitude = location.lng();
    });
    $scope.searchNearbyRestaurantByLocation = function() {
    	if($scope.latitude === '' || $scope.longitude === '') {
    		alert('You have to choose location');
    		return;
    	}
    	HomeModel.getNearbyResturants($scope.latitude, $scope.longitude, onSuccess, onFail);    	
   		$location.hash('neaby_restaurants');
   		$anchorScroll();
    };
	getNearbyResturantsToMyLocation();
    
 }]);
