angular.module('starter.controllers',[])

App.controller('deletetestcontroller', function($scope, $http,$state) {

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
    
    
      var link = 'http://localhost:8080/myApp/listTest.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
    
                   $scope.test=res.data;
                   console.log($scope.test);
                   
            
 

       });
    
   $scope.delete = function(x){
       
       
       var testid=x.testid;
       
       
       
           var link = 'http://localhost:8080/myApp/deletetest.php';
    
               $http.post(link, {user_id : userid,testid:testid}).then(function (res){
                   
                 
    
                   $scope.test=res.data;
                   
                   console.log(res.data);
                  
                   
            
 

       });
    
       
      
   }
    

    
    

      
});