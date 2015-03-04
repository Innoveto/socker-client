'use strict';

angular.module('webfactory').controller('MainController', ['$scope', '$http', '$location', function ($scope, $http, $location, $socket) {
  $scope.containers = [];

  socket.on('statechange', function(data) {
    $scope.$apply(function () {
      $scope.containers = data;
    });
  });

  $scope.submitTheForm = function() {
    /* jshint camelcase: false */
    console.log('Submitting form');
    var dataObject = {
      node_title : $scope.nodeTitle,
      hostname : $scope.containerName,
      site_email : $scope.siteEmail,
      public : 1,
      owner_uid : 1
    };

    var responsePromise = $http.post('http://192.168.1.132:8073/webfact_api/website', dataObject, {});
    responsePromise.success(function(dataFromServer, status, headers, config) {
      $location.path('/container/' + $scope.containerName);
    });
    responsePromise.error(function(data, status, headers, config) {
      alert('Submitting form failed!');
    });
  }
}]);
