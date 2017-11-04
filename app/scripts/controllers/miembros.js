'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MiembrosCtrl', function ($scope,$http,$modal) {
    $http.get('http://localhost:9000/miembros.json').success(function(data){
      $scope.miembros = data
    })

    $scope.gridOptions = {
      data:'miembros'
    }

    $scope.gridOptions = {
      data:'miembros',
      showGroupPanel: true,
      enableCellSelection:true,
      enableRowSelection:false,
      enableCellEdit:true,
      columnDefs:[
        {field:'no',displayName:'N°.'},
        {field:'nombre',displayName:'Nombre'},
        {field:'fidelidad',displayName:'Puntos Fidelidad'},
        {field:'fechaUnion',displayName:'Fecha de Union'},
        {field:'tipoMiembro',displayName:'tipo de miembro'}
      ]
    };

    $scope.showModal = function(){
      $scope.nuevoMiembro={};
        var modalInstance = $modal.open({
        templateUrl:'views/add-miembros.html',
        controller:'AddNuevoMiembroCtrl'
      })}
  })
  .controller('AddNuevoMiembroCtrl',function($scope,$modalInstance){
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    };
  });
