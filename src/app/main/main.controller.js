'use strict';

angular.module('webfactory').controller('MainController', function($scope, $http, socket) {
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
      node_title : 'hello world!',
      hostname : $scope.containerName,
      site_email : 'katie@innoveto.com',
      public : 1,
      owner_uid : 6
    };

    var responsePromise = $http.post('http://192.168.1.132:8073/webfact_api/website', dataObject, {});
    responsePromise.success(function(dataFromServer, status, headers, config) {
      console.log(dataFromServer.hostname);
    });
    responsePromise.error(function(data, status, headers, config) {
      alert('Submitting form failed!');
    });
  };
});