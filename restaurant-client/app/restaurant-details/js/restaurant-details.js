'use strict';

app.controller('RestaurantDetailsCtrl', ['$stateParams', '$state',  '$scope', 'RestaurantDetailsModel','ReviewModel',
 function ($stateParams, $state, $scope, RestaurantDetailsModel,ReviewModel) {
	console.log($stateParams.placeId);
	if($stateParams.placeId === undefined || $stateParams.placeId === null || $stateParams.placeId === ""){
		$state.go('app.home');
		return ;
	}
	var placeId = $stateParams.placeId;
	$scope.isLoading = true;
	$scope.rating = null ;
	$scope.description = "";
	$scope.reviews = [];
	$scope.name = "";
	$scope.avarageRating = 0;
	function onSuccess(data) { 
		$scope.isLoading = false;
		$scope.resturantDetails = data;
	}
	function onFail() {
		$scope.isLoading = false;
	}
	


	$scope.getPlaceReviews = function() {
		function onSuccess(data) { 
			$scope.reviews = data;
			var sum = 0;
			for(var i = 0 ; i < $scope.reviews.length ; i ++){
				sum += $scope.reviews[i].rating; 
			}
			$scope.avarageRating = sum / $scope.reviews.length;
		}
		function onFail() {
			alert("Fail");
		}

		ReviewModel.getPlaceReviews(placeId, onSuccess, onFail);
	};
	

	$scope.submitReview = function() { 
		if($scope.rating === null || $scope.description === "" || $scope.name === ""){
			alert("You must fill all required fields");
			return ;
		}
		var sentData = {
		    placeId: placeId,
		    date: new Date(),
		    name: $scope.name,
		    description: $scope.description,
		    rating: $scope.rating
		}
		function onSuccess() { 
			$scope.getPlaceReviews();
		}
		function onFail() {
			alert("Fail");
		}
		ReviewModel.saveReview(sentData, onSuccess, onFail);
		$scope.rating = 0;
		$scope.name = "";
		$scope.description = "";
	};
	$scope.onRestaurantRating = function(rating) {
		$scope.rating = rating;
	};
	RestaurantDetailsModel.getRestaurantDetails(placeId, onSuccess, onFail);
	$scope.getPlaceReviews();
 }]);