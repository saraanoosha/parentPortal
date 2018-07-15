angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addStudentController', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addStudentBackButton= function(){
        
         
           $state.go('adminhome.student');

             
        
      };
     var link = 'http://localhost:8080/myApp/admin/getprogram.php';
          $http.get(link).then(function(res){
              
          $scope.programs=res.data;
              
              console.log($scope.programs);
             
        
        
          });
    
    
         var link1 = 'http://localhost:8080/myApp/admin/getbatch.php';
    
            $http.get(link1).then(function (res){
                   
                 
    
                
                   
                 $scope.batch1=res.data;
                console.log($scope.batch1);
                  
         
     });
    
    
    
         var link1 = 'http://localhost:8080/myApp/admin/getsemester.php';
    
            $http.get(link1).then(function (res){
                   
                 
    
                
                   
                 $scope.sem=res.data;
                console.log($scope.sem);
                  
         
     });
    
    
    
         var link1 = 'http://localhost:8080/myApp/admin/getsection.php';
    
            $http.get(link1).then(function (res){
                   
                 
    
                
                   
                 $scope.sec=res.data;
                console.log($scope.sec);
                  
         
     });
    
    
   

   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addStudentSubmit = function(){
         var link = 'http://localhost:8080/myApp/admin/addStudent.php';
       
 
         $http.post(link, {fname : $scope.data.StudentFirstname, lname : $scope.data.studentLastname, rollno : $scope.data.studentRollNo, address : $scope.data.studentAddress,
          date : $scope.data.dueDate, batch : $scope.data.batch,
          gender : $scope.data.genderSelect,program:$scope.data.program,batch:$scope.data.batch,semester:scope.data.semester, section : $scope.data.section, parentCnic : $scope.data.parentCnic,
          parentID : $scope.data.parentID}).then(function (res){
            
               $scope.found = res.data;
           if($scope.found == "yup")
              {
            alert("added");
              }
              if($scope.found != "yup")
              {
            alert("added");
              }
           

          });
      };


      
});