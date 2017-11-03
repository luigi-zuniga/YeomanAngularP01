'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures = $scope.pictures=[];

    var baseURL = "http://lorempixel.com/300/180/";
    var titles = ["Comida sana","Salud y trabajo","Vida nocturna",
                "Mantente activo","Cuida tu aspecto","Vida nocturna"];
   
    var keywords = ["food","business","city",
    "sports","fashion","nightlife"];

    var dummyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum quis eos iusto dolorum, assumenda consequuntur vel quam provident minus fugit dignissimos atque aspernatur reiciendis recusandae accusantium dicta esse quisquam";

    $scope.addPics = function(i){
      pictures.push({
        url:baseURL+keywords[i],
        title:titles[i],
        summary:dummyText
      })
    }
  
    for(var i=0;i<8;i++){
      $scope.addPics(i);
    }

    $scope.rate = 0;
    $scope.max = 10;
    $scope.isReadonly = false;
  });
