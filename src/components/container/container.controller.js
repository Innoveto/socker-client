'use strict';

angular.module('webfactory').controller('ContainerController', function($scope, $routeParams, socket) {

  var containerName = $routeParams.containerName;

  $scope.container = {
    name: $routeParams.containerName,
    State: null
  };

  function update(data) {
    $scope.$apply(function () {
      $scope.container.name = data.Name;
      $scope.container.id = data.Id;
      $scope.container.state = data.State;
    });
  }

  socket.on('statechange:' + containerName, update);

  socket.emit('getstate', containerName);

});