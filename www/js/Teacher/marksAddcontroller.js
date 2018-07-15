angular.module('starter.controllers',[])

App.controller('marksAddcontroller', function($scope, $http,$state,$stateParams) {

 $scope.data = {};
    
    //var testid = $stateParams.testid;
       var testid = sessionStorage.getItem('Mtestid');
    
   var userid = sessionStorage.getItem('user');

    
  
    
    
    
    
      var link = 'http://localhost:8080/myApp/Teacher/Listteststudents.php';
    
               $http.post(link, {testid:testid}).then(function (res){
                   
                 
    
                 console.log(res.data);
                   $scope.students=res.data;
                   
                   
                   
                   
                   
                
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
    
     $scope.addmarks=function(data,status,obmarks,){
          var userid = sessionStorage.getItem('user');
         
       //  var marks = data.marks;
        var rollnumber = data.rollnumber;
     // var obmarks= obmarks;
      //var status= status;
       
         var program= sessionStorage.getItem('Mprogram');
          var semester= sessionStorage.getItem('Msemester');
          var batch= sessionStorage.getItem('Mbatch');
         var section= sessionStorage.getItem('Msection');
           var course= sessionStorage.getItem('Mcourse'); 
          var testid = sessionStorage.getItem('Mtestid');
            var totmarks=sessionStorage.getItem('Mtotmarks');
         
     
         
       
       
        
      
       
          
         
      
         
             
               var marks = [
  {rollnumber:rollnumber
   , status: status,
   section:section,
   batch:batch,
   totmarks:totmarks,
   obmarks:obmarks,
    program:program,
   semester:semester,
   testid:testid,
   course:course
  }
 
];
         
        
         
       
         
               var link = 'http://localhost:8080/myApp/Teacher/addmarks.php';
    
               $http.post(link, {user_id : userid,marks:marks}).then(function (res){
                   
                 
    
                  console.log(res.data);
                   
                   
                   
                   
                
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
         
         
         
         
         
         
     };
    
    
    
    

    
    

      
});



App.controller('marksupdatecontroller', function($scope, $http,$state,$stateParams) {
    
    
      var testid = sessionStorage.getItem('Mtestid');
    
   var userid = sessionStorage.getItem('user');

    
  
    
    
    
    
      var link = 'http://localhost:8080/myApp/Teacher/Listteststudents.php';
    
               $http.post(link, {testid:testid}).then(function (res){
                   
                 
    
                 console.log(res.data);
                   $scope.students=res.data;
                   
               });
    
    $scope.updatemarks = function(x,status,obmarks){
         var test= sessionStorage.getItem('Mtestid');
        console.log(x.rollnumber);
        var rollnumber=x.rollnumber;
        
        
         var link = 'http://localhost:8080/myApp/Teacher/updatemarks.php';
    
               $http.post(link, {testid:test,status:status,marks:obmarks,rollnumber:rollnumber}).then(function (res){
                   
                 
    
                 console.log(res.data);
                   $scope.students=res.data;
                   
               });
        
     
        
        
    }

    
    
    
});