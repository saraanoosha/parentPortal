angular.module('starter.controllers',[])

App.controller('AddTest', function($scope, $http,$state) {

 $scope.data = {};
    
    
    
    
             var userid = sessionStorage.getItem('user');
          
  
       
         var link = 'http://localhost:8080/myApp/Teacher/getprograms.php';
          $http.get(link).then(function(res){
              
          $scope.programs=res.data;
             
              
              
          });
    
     $scope.program1 = function(){
      
   
        sessionStorage.setItem('program1',$scope.program5);
         var program5 = sessionStorage.getItem('program1');
         
          var link = 'http://localhost:8080/myApp/Teacher/getbatch.php';
    
               $http.post(link, {program:program5}).then(function (res){
                   
                 
    
                
                   
                 $scope.batch1=res.data;
                  
         
     });
        
         
     };
    
        $scope.semester = function(){
            
              sessionStorage.setItem('batch2',$scope.batch3);
      
    var batch2 = sessionStorage.getItem('batch2');
   var program = sessionStorage.getItem('program1');
            
            
              var link = 'http://localhost:8080/myApp/Teacher/getsemester.php';
    
               $http.post(link, {program:program,batch:batch2}).then(function (res){
                   
                 
    
                
                   
                 $scope.semester=res.data;
            
         
     });
        };
            
    $scope.section = function(){
            
              sessionStorage.setItem('course',$scope.selectedcourse);
    
      
    var batch1 = sessionStorage.getItem('batch2');
   var program = sessionStorage.getItem('program1');
    var semester1 = sessionStorage.getItem('semester1');
        var course =  sessionStorage.getItem('course');
                    
                   
            
            
              var link = 'http://localhost:8080/myApp/Teacher/getsection.php';
    
               $http.post(link, {program:program,batch:batch1,semester:semester1,course:course}).then(function (res){
                   
                 
    $scope.s = res.data;
                   
              
               
            
         
     });
          
            
           
           
         

        
         
     };
    
    
        $scope.getcourse = function(){
            
              sessionStorage.setItem('semester1',$scope.semester1);
            
                var semester1 = sessionStorage.getItem('semester1');
            
              
    
      
    var batch1 = sessionStorage.getItem('batch2');
   var program = sessionStorage.getItem('program1');

    var userid = sessionStorage.getItem('user');
            
            
                    
                   
            
            
              var link = 'http://localhost:8080/myApp/Teacher/getcourse.php';
    
               $http.post(link, {program:program,batch:batch1,semester:semester1,tid:userid}).then(function (res){
                   
                 
    $scope.course = res.data;
                   
                  
                   
              
               
            
         
     });
          
            
           
           
         

        
         
     };
        
       
         

    
     
    
     $scope.Addtest = function(){
         
       
          sessionStorage.setItem('section',$scope.section);
     
    
       var batch1 = sessionStorage.getItem('batch2');
   var program = sessionStorage.getItem('program1');
    var semester1 = sessionStorage.getItem('semester1');
     var section = sessionStorage.getItem('section');
            var userid = sessionStorage.getItem('user');
         var userid = sessionStorage.getItem('user');
         var course = sessionStorage.getItem('course');
         var testname=$scope.testname;
         var marks=$scope.marks;
            
            
         
      
            
              var link = 'http://localhost:8080/myApp/Teacher/addtest.php';
    
               $http.post(link, {program:program,batch:batch1,semester:semester1,section:section,tid:userid,course:course,name:testname,totmarks:marks}).then(function (res){
                   
                 
           test_id=res.data;
                   
                   console.log(test_id);
                       
                   
                   
                   sessionStorage.setItem('Mtestid',test_id);
        
                   
                   
                   
           $state.go('teacherhome.MarksAdd');
                   
        
                   
              
                  
                   
              
               
            
         
     });
          
         
         
      
         
     };
    
    

      
});