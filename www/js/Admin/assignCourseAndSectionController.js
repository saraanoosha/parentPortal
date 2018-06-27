angular.module('starter.controllers',[])

App.controller('assignCourseAndSectionController', function($scope, $http,$state) {
$scope.data = {};
var allcourseslink = 'http://127.0.0.1:8080/myApp/retrieveAllCourses.php';
$http.post(allcourseslink, {}).then(function (res){
         $scope.allcoursesfound = res.data;
         console.log($scope.allcoursesfound);

           });
var allteacherslink = 'http://127.0.0.1:8080/myApp/retrieveAllTeachers.php';
$http.post(allteacherslink, {}).then(function (res){
         $scope.allteachersfound = res.data;
         console.log($scope.allteachersfound);

           });
var allsectionslink = 'http://127.0.0.1:8080/myApp/retrieveAllSections.php';
$http.post(allsectionslink, {}).then(function (res){
         $scope.allsectionsfound = res.data;
         console.log($scope.allsectionsfound);

           });
      
   
    $scope.assignCourseAndSectionBackButton = function(){
        
         $state.go('adminhome.teacher');
      };

      //$scope.data ="hiiii";
     $scope.assignSubmit = function(){
      var selectedCourse=$scope.data.courseid;
         console.log(selectedCourse);
          var selectedteacher=$scope.data.teacher;
         console.log(selectedteacher);
          var selectedsection=$scope.data.section;
         console.log(selectedsection);


          var link = 'http://127.0.0.1:8080/myApp/assignCourse.php';
 
        $http.post(link, {course : selectedCourse, teacher : selectedteacher, section : selectedsection}).then(function (res){
         $scope.found = res.data;
          if($scope.found == "inserted in tables")
              {
            alert("try again");
              }
            else
              {
              
              alert("Section and Courses assigned Successfully");
              
               }

           });
         //$state.go('adminhome.parent');
      };


      
});