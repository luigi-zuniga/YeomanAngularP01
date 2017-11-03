'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts = [
      {
        title:"Alimentos buenos para la salud",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam quia provident velit dignissimos ipsam accusantium, vel, reprehenderit iure similique animi, iste iusto saepe praesentium soluta alias quae voluptas laborum!"
      },
      {
        title:"Alimentos buenos para la salud",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam quia provident velit dignissimos ipsam accusantium, vel, reprehenderit iure similique animi, iste iusto saepe praesentium soluta alias quae voluptas laborum!"        
      },
      {
        title:"Limita la cantidad de hidratos de carbono",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam quia provident velit dignissimos ipsam accusantium, vel, reprehenderit iure similique animi, iste iusto saepe praesentium soluta alias quae voluptas laborum!"   
      }
    ];
  });
