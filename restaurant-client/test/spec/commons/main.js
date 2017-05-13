'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('returantFinderApp'));

  var $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    var $scope = {};
    var controller = $controller('MainCtrl', { $scope: $scope });
    expect($scope.awesomeThings.length).toBe(3);
  });
});
