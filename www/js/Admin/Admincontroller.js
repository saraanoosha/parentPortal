angular.module('starter.controllers',[])

App.controller('parentcontroller', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addparent1 = function(){
        
         
             $state.go('addparent');
             
        
      };
      
      $scope.Deleteparent=function(){
        $state.go('deleteparent');
      };
      $scope.editparent=function(){
        $state.go('editparent');
      };
      //  $scope.editparent=function(){
      //   $state.go('deleteparent');
      // };
});
App.controller('adminLogout', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.logoutfromAdminHomePage = function(){
        
         
             $state.go('page1');
             
        
      };
});