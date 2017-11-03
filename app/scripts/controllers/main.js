'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
     var baseUrl = 'http://lorempixel.com/960/450/';
     $scope.setInterval = 5000;

     $scope.slides = 
     [
      {
        title:'Aprende a mantenerte en forma',
        image:baseUrl+'sports/',
        text:'¡Practica algun deporte todos los dias'
      },
      {
        title:'Buena Alimentacion',
        image:baseUrl+'food/',
        text:'¡La importancia de frutas y verduras en el dia a dia'
      },
      {
        title:'En contacto con la naturaleza',
        image:baseUrl+'nature/',
        text:'¡Mantente en armonia con la naturaleza!'
      }
     ];



     var baseUrl = 'http://lorempixel.com/200/200/';
     $scope.Contenido = [
      {
        image:baseUrl+'people',
        title:'Sobre Nosotros',
        summary:'Somos una empresa comprometida con la vida sana'
      },
      {
        image:baseUrl+'business',
        title:'Nuestros Servicios',
        summary:'Ofrecemos asesoria profesional para mantenerse Sanos, buan alimentacion'
      },
      {
        image:baseUrl+'transport',
        title:'Contactanos',
        summary:'#333, Buena vida online, plaza Central,Durance, Zip-432167'
      }

     ];
});

