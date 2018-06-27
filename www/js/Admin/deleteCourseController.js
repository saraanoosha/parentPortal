angular.module('starter.controllers',[])

App.controller('deleteCourseController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.DeleteCourseBackButton = function(){
        
         $state.go('adminhome.course');
      };

      //$scope.data ="hiiii";
     $scope.Deletesubmit = function(){
          var link = 'http://127.0.0.1:8080/myApp/deleteCourse.php';
 
          $http.post(link, {courseeCode : $scope.data.courseCode}).then(function (res){
         $scope.found = res.data;
          if($scope.found == "yes")
              {
            alert("deleted");
              }
            else
              {
              
              alert("User doesn't exist");
              
               }

           });
         //$state.go('adminhome.parent');
      };


      
});