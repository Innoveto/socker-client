'use strict';

angular.module('webfactory', ['ngRoute', 'btford.socket-io'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .when('/container/:containerName', {
        templateUrl: 'components/container/container.html',
        controller: 'ContainerController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
