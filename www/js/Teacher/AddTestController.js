angular.module('starter.controllers',[])

App.controller('AddTest', function($scope, $http,$state) {

 $scope.data = {};
    
    
    
    
             var userid = sessionStorage.getItem('user');
             var batch;
             var section;
    
    
     $scope.getbatch = function(){
        batch = $scope.selectedbatch;
        // console.log(batch);
        
         
     };
    
    
     $scope.getsection = function(){
        section = $scope.selectedsection;
        // console.log(section);
         $scope.listcourses();
        
         
     };
    
    $scope.listcourses = function(){
     var userid = sessionStorage.getItem('user');
   
             
    
      var link = 'http://localhost:8080/myApp/listcourse.php';
    
               $http.post(link, {user_id : userid,batch:batch,section:section}).then(function (res){
                   
                 
    
                   $scope.course=res.data;
                   
                  
                   //console.log($scope.course);
                   
            
 

       });
        
    };
    
    
     
    
     $scope.Addtest = function(){
         var userid = sessionStorage.getItem('user');
         var testname = $scope.testname;
           var totmarks = $scope.marks;
           var batch = $scope.selectedbatch;
           var section = $scope.selectedsection;
         var course = $scope.selectedcourse;
         
          var link = 'http://localhost:8080/myApp/managetest.php';
         
         
               $http.post(link, {user_id : userid, testname : testname,totmarks: totmarks, batch: batch, section:section,course:course  }).then(function (res){
                   
                   $scope.data = res.data;
                   alert($scope.data);
            
 

       });
         
         
         
      
         
     };
    
    

      
});