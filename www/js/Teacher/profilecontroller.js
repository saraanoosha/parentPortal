angular.module('starter.controllers',[])

App.controller('profilecontroller', function($scope, $http,$state) {

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
    
    
      var link = 'http://localhost:8080/myApp/Teacher/teacherprofile.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
               
                   
            
 

       });
    

    
    

      
});