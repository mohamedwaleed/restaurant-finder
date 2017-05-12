'use strict';

app.controller('HomeCtrl', ['HomeModel', '$scope', function (HomeModel, $scope) {
	$scope.isLoading = true;
	$scope.nearbyResturants = [];
	function getNearbyResturantsToMyLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(getPosition, error);
	    } else {
	        console.log("Geolocation is not supported by this browser.");
	    }
	}
	function error() {
		// get restaurants around default location
		HomeModel.getNearbyResturants(29.99382, 31.16988, onSuccess, onFail);
		$scope.nearbyResturants = HomeModel.nearbyResturants;
		
	}
	function getPosition(position) {
	    HomeModel.getNearbyResturants(position.coords.latitude, position.coords.longitude, onSuccess, onFail);
	    $scope.nearbyResturants = HomeModel.nearbyResturants;
	    
	}
	function onSuccess() {
		$scope.isLoading = false;
	};
	function onFail() {
		$scope.isLoading = false;
	};
	getNearbyResturantsToMyLocation();
    
 }]);
