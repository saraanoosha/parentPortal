angular.module('starter.controllers',[])

App.controller('alogininctrl', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.loginsubmit = function(){
         var link = 'http://127.0.0.1:8080/myApp/admin/adminlogin.php';
 
         $http.post(link, {username : $scope.data.loginusername, password : $scope.data.loginpassword}).then(function (res){
               $scope.found = res.data;
               // console.log($scope.found);
          sessionStorage.clear();
          sessionStorage.setItem('adminId',$scope.found);
          if($scope.found !="0 results")
              {
             $state.go('adminhome');
              }
            else
              {
              
              alert("User doesn't exist");
              
               }

          });
      };


      
});
App.controller('plogininctrl', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.loginsubmit = function(){
         var link = 'http://127.0.0.1:8080/myApp/parent/parentLogin.php';
 
         $http.post(link, {username : $scope.data.parentUsername, password : $scope.data.parentPassword}).then(function (res){
          $scope.found = res.data;
          sessionStorage.clear();
          sessionStorage.setItem('parentId',$scope.found);

          if($scope.found !="0 results")
              {
    
             $state.go('parenthome');
              }
            else
              {
              
              alert("User doesn't exist");
              
               }

          });
      };


      
});