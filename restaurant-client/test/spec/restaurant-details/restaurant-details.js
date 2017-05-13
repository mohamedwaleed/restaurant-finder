'use strict';

describe('Controller: RestaurantDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('returantFinderApp'));

  var $controller;
  var stateParams = { placeId:'ChIJK7qCJHdGWBQRd6_5JIeM9r0' }; 
  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should should attach restaurant details to scope', function () {
    var $scope = {};
    
    var controller = $controller('RestaurantDetailsCtrl', { $scope: $scope, $stateParams:stateParams });
    expect($scope.resturantDetails).not.toBe(null);
    expect($scope.resturantDetails).not.toBe(undefined);
  });

  it('should get restaurant reviews to scope', function () {
    var $scope = {};
    var controller = $controller('RestaurantDetailsCtrl', { $scope: $scope, $stateParams:stateParams });
    expect($scope.reviews).not.toBe(null);
    expect($scope.reviews).not.toBe(undefined);
  });

  it('should bind restaurant rating to scope', function () {
    var $scope = {};
    var controller = $controller('RestaurantDetailsCtrl', { $scope: $scope, $stateParams:stateParams });
    $scope.onRestaurantRating(4);
    expect($scope.rating).toBe(4);
  });

  it('should get restaurant average reviews rating to scope', function () {
    var $scope = {};
    var controller = $controller('RestaurantDetailsCtrl', { $scope: $scope, $stateParams:stateParams });
    var reviews = [{rating: 4},{rating: 1},{rating: 5},{rating: 2},{rating: 3}];
    $scope.getAverageRating(reviews);
    expect($scope.avarageRating).toBe(3);
  });

});
