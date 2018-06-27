angular.module('starter.controllers',[])

App.controller('markscontroller', function($scope, $http,$state) {

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
    
    
      var link = 'http://localhost:8080/myApp/listTest.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
    
                   $scope.test=res.data;
                   //console.log($scope.test);
                   
            
 

       });
    
    
    $scope.marks = function(x){
        
        sessionStorage.setItem('Mcourse',x.coursename);
         sessionStorage.setItem('Msection',x.sectionname);
          sessionStorage.setItem('Mbatch',x.batchyear);
         sessionStorage.setItem('Mtestid',x.testid);
        
        $state.go('teacherhome.MarksAdd');
        
        
        
        
        
    }
    
    
  
    

    
    

      
});