'use strict';

app.controller('RestaurantDetailsCtrl', ['$stateParams', '$state',  '$scope', 'RestaurantDetailsModel', function ($stateParams, $state, $scope, RestaurantDetailsModel) {
	console.log($stateParams.placeId);
	if($stateParams.placeId === undefined || $stateParams.placeId === null || $stateParams.placeId === ""){
		$state.go('app.home');
		return ;
	}
	var placeId = $stateParams.placeId;
	$scope.isLoading = true;
	function onSuccess(data) { 
		$scope.isLoading = false;
		$scope.resturantDetails = data;
	}
	function onFail() {
		$scope.isLoading = false;
	}
	RestaurantDetailsModel.getRestaurantDetails(placeId, onSuccess, onFail);
 }]);