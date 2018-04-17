angular.module('starter.controllers',[])

App.controller('alogininctrl', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.loginsubmit = function(){
         var link = 'http://127.0.0.1:8080/myApp/adminlogin.php';
 
         $http.post(link, {username : $scope.data.loginusername, password : $scope.data.loginpassword}).then(function (res){
               $scope.found = res.data;
          if($scope.found == "true")
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