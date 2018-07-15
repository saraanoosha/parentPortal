angular.module('starter.controllers',[])

App.controller('assignCourseAndSectionController', function($scope, $http,$state) {
$scope.data = {};

var ShowAllTeachersLink = 'http://127.0.0.1:8080/myApp/admin/retrieveAllTeachers.php';
      $http.post(ShowAllTeachersLink, {}).then(function (res){
         $scope.allteacherfound = res.data;
         console.log($scope.allteacherfound);

           });

var ShowAllCourseLink = 'http://127.0.0.1:8080/myApp/admin/retrieveAllCourses.php';
      $http.post(ShowAllCourseLink, {}).then(function (res){
         $scope.allcoursefound = res.data;
         console.log($scope.allcoursefound);

           });
var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/retrieveProgram.php';
      $http.post(ShowProglink, {}).then(function (res){
         $scope.allprogfound = res.data;
         console.log($scope.allprogfound);

           });
var Showbatchlink = 'http://127.0.0.1:8080/myApp/admin/retrieveBatch.php';
      $http.post(Showbatchlink, {}).then(function (res){
         $scope.allbatchfound = res.data;
         console.log($scope.allbatchfound);

           });

 var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/retrieveSem.php';
      $http.post(Showsemesterlink, {}).then(function (res){
         $scope.allsemfound = res.data;
         console.log($scope.allsemfound);


           });

      
   
    $scope.assignCourseAndSectionBackButton = function(){
        
         $state.go('adminhome.teacher');
      };

      //$scope.data ="hiiii";
     $scope.assignSubmit = function(){
       var selectedBatch=$scope.data.batch;
        console.log(selectedBatch);
        var selectedProg=$scope.data.program;
        console.log(selectedProg);
        var selectedSemester=$scope.data.yesSemester;
        console.log(selectedSemester);
        var selectedCourse=$scope.data.course;
        console.log(selectedCourse);
        var selectedSection=$scope.data.section;
        console.log(selectedSection);
        var selectedTeacher=$scope.data.teacher;
        console.log(selectedTeacher);


          var link = 'http://127.0.0.1:8080/myApp/admin/assignCourse.php';

 
        $http.post(link, {course : selectedCourse, teacher : selectedTeacher, section : selectedSection, semester:selectedSemester,
         prog: selectedProg, batch:selectedBatch  }).then(function (res){
         $scope.found = res.data;
            if($scope.found == "yup")
              {
            alert("not assignedd");
              }
              if($scope.found != "yup")
              {
            alert("assigned");
              }

           });
         //$state.go('adminhome.parent');
      };


      
});