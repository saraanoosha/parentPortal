angular.module('starter.controllers',[])

App.controller('Teacherlogin', function($scope, $http,$state) {

 $scope.data = {};
       $scope.Teacherlogin = function(){
        // var link = 'http://40.65.178.216/ionic/myApp/Teacherlogin.php';
        // http://localhost:8080/myApp/Teacherlogin.php
       
            var link = 'http://localhost:8080/myApp/Teacherlogin.php';

        $http.post(link, {username : $scope.tusername, password : $scope.tpassword}).then(function (res){
            
    
        $scope.found=res.data.status;
        var user=res.data.id1;
           
             
             
            
       
            //sessionService.set('user','1');
           sessionStorage.setItem('user', user);
            
             if($scope.found === "true")
                 
              {
               $state.go('teacherhome');
              
           
             
                
              }
            else
              {
              
              alert($scope.found);
              
               }

       });
        

         
      };
      
});