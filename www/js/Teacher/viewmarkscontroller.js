angular.module('starter.controllers',[])

App.controller('viewmarkscontroller', function($scope, $http,$state) {

 $scope.data = {};
    

    
    var testid= sessionStorage.getItem('vtestid');
  
        
    
      var link = 'http://localhost:8080/myApp/Teacher/viewTest.php';
    
               $http.post(link, {testid : testid}).then(function (res){
                   
                 
    
                   $scope.test=res.data;
                   console.log($scope.test);
                   
            
 

       });
    
  
    

    
    

      
});