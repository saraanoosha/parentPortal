angular.module('starter.controllers',[])

App.controller('Teacherlogin', function($scope, $http,$state) {

 $scope.data = {};
       $scope.Teacherlogin = function(){
         var link = 'http://127.0.0.1:8080/myApp/Teacherlogin.php';
         
       

        $http.post(link, {username : $scope.tusername, password : $scope.tpassword}).then(function (res){
               $scope.found = res.data;
            
         //   alert($scope.found);
            
             if($scope.found === "true")
              {
             $state.go('teacherhome');
              }
            else
              {
              
              alert("User doesn't exist");
              
               }
//
       });
        

         
      };
      
});