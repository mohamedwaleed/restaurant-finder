'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('returantFinderApp'));

  var $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should attach a list of nearby resturants to the scope', function () {
    var $scope = {};
    $controller('HomeCtrl', { $scope: $scope });
    expect($scope.nearbyResturants).not.toBe(null);
    expect($scope.nearbyResturants).not.toBe(undefined);
  });
});
