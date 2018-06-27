angular.module('starter.controllers',[])

App.controller('marksAddcontroller', function($scope, $http,$state) {

 $scope.data = {};
    
       var section = sessionStorage.getItem('Msection');
     var batch = sessionStorage.getItem('Mbatch');
       var course = sessionStorage.getItem('Mcourse');
    
    var userid = sessionStorage.getItem('user');
    var testid = sessionStorage.getItem('Mtestid');
  
    
    
    
    
      var link = 'http://localhost:8080/myApp/Listteststudents.php';
    
               $http.post(link, {user_id : userid,batch:batch,section:section,course:course,testid:testid}).then(function (res){
                   
                 
    
                   $scope.students=res.data;
                   
                   
                   
                   
                
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
    
     $scope.addmarks=function(data,obmarks,status){
         
         var marks = data.marks;
         var rollnumber = data.rollnumber;
         
     
         
               var marks = [
  {rollnumber:rollnumber
   , status: status,
   section:section,
   batch:batch,
   testid:testid,
   totmarks:marks,
   obmarks:obmarks
  }
 
];
         
       
         
               var link = 'http://localhost:8080/myApp/addmarks.php';
    
               $http.post(link, {user_id : userid,marks:marks}).then(function (res){
                   
                 
    
                  console.log(res.data);
                   
                   
                   
                   
                
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
         
         
         
         
         
         
     };
    
    
     $scope.test=function(x){
         
         
     console.log(x);
         
         
     };
    

    
    

      
});