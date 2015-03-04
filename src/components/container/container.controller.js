'use strict';

angular.module('webfactory').controller('ContainerController', function($scope, $routeParams, socket) {
  var containerName = $routeParams.containerName;
  $scope.container = {
    name: $routeParams.containerName,
    State: null
  };

  socket.on('statechange:' + containerName, function (data) {
    $scope.container.name = data.Name;
    $scope.container.id = data.Id;
    $scope.container.state = data.State;
  });

});