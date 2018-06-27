angular.module('starter.controllers',[])

App.controller('Attendencecontroller', function($scope, $http,$state,attendence){
    
   //$scope.Attendence = attendence;
    

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
     
      var link = 'http://localhost:8080/myApp/Attendencelist.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
   
                   $scope.attendence1=res.data;
                  attendence.set('Attbatchyear',res.data[0].batch);
              attendence.set('Attsection',res.data[0].section);
                   
                   
                   
                   
            
 

       });
    
        $scope.attendence3 = function(data){
        
        
      //  alert(data.section);
            
            var batch = data.batch;
            var section = data.section;
            
            sessionStorage.setItem('Attsection',section);
            sessionStorage.setItem('Attbatch', batch);
            
 // var attendencedata = { batch:batch, section:section };
$state.go('teacherhome.Addattendence');
            
            
        
        
    };
    

    
    

      
});