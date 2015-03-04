'use strict';

angular.module('webfactory').service('socket', function ($window, socketFactory) {
  return socketFactory({
    ioSocket: $window.io.connect('http://192.168.1.132:8042')
  });
});
