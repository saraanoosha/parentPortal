angular.module('starter.controllers',[])

App.controller('retrievedate', function($scope, $http,$state,attendence){
    
    var cid=sessionStorage.getItem('cid');
    
          var link = 'http://localhost:8080/myApp/Teacher/retrievedate.php';
    
               $http.post(link, {cid: cid}).then(function (res){
                   
                 
   
                   $scope.date=res.data;
                   console.log($scope.date);
               
              
                   
                   
                   
            
 

       });
 
    
    
    
});