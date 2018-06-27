angular.module('starter.controllers',[])

App.controller('Addattendence', function($scope, $http, $state,attendence) {

    var section1 = sessionStorage.getItem('Attsection');
     var batch1 = sessionStorage.getItem('Attbatch');
    
   
     var batch= batch1;
    var section =section1;
       var userid = sessionStorage.getItem('user');
   
             
    
      var link = 'http://localhost:8080/myApp/Liststudents.php';
    
               $http.post(link, {user_id : userid,batch:batch,section:section}).then(function (res){
                   
                 
    
                   $scope.students=res.data;
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
    
   
    
    $scope.addattendence=function(x,data){
        var rollnumber = x.rollnumber
        
        var status = data;
        attendence1=new Array();
          var section1 = sessionStorage.getItem('Attsection');
     var batch1 = sessionStorage.getItem('Attbatch'); 
        var date = $scope.date1;
      
        var attendence = [
  {rollnumber:rollnumber
   , status: status,
   section:section1,
   batch:batch1,
  date:date}
 
];
        attendence1.push(attendence);
        
             var userid = sessionStorage.getItem('user');
   
             
    
      var link = 'http://localhost:8080/myApp/attendence.php';
    
               $http.post(link, {user_id : userid,attendence:attendence1}).then(function (res){
                   
                 
    
               
                   console.log(res.data);
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
        
       
        
        
    
    };
    
  
    
    
    
    

      
});