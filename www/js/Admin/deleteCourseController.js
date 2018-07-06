angular.module('starter.controllers',[])

App.controller('deleteCourseController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.DeleteCourseBackButton = function(){
        
         $state.go('adminhome.course');
      };

      //$scope.data ="hiiii";
       var ShowAllCourseLink = 'http://127.0.0.1:8080/myApp/admin/retrieveAllCourses.php';
      $http.post(ShowAllCourseLink, {}).then(function (res){
         $scope.allcoursefound = res.data;
         console.log($scope.allcoursefound);

           });
     $scope.Deletesubmit = function(){


         var selectedCourse=$scope.data.course;
        console.log(selectedCourse);
          var link = 'http://127.0.0.1:8080/myApp/admin/deleteCourse.php';
 
          $http.post(link, {course : selectedCourse}).then(function (res){
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
         $state.go('adminhome.parent');
      };


      
});