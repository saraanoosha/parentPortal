angular.module('starter.controllers',[])

App.controller('parentcontroller', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addparent1 = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('addparent');
             
        
      };
      
      $scope.Deleteparent=function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
        $state.go('deleteparent');
      };
      $scope.editparent=function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
        $state.go('editparent');
      };
      //  $scope.editparent=function(){
      //   $state.go('deleteparent');
      // };
});
App.controller('challanController', function($scope, $http,$state) {
   $scope.data = {};

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


      //$scope.data ="hiiii";
     $scope.issue = function(){
      $scope.sessionAdminId = sessionStorage.getItem('adminId');
      console.log($scope.sessionAdminId);
       var selectedBatch=$scope.data.batch;
       console.log(selectedBatch);
       var selectedProg=$scope.data.program;
      console.log(selectedProg);
      var selectedSemester=$scope.data.yesSemester;
      console.log(selectedSemester);
        
  sessionStorage.setItem('proggid',selectedProg);
  sessionStorage.setItem('batchid',selectedBatch);
  sessionStorage.setItem('semid',selectedSemester);


         
      $state.go('issueChallan');
             
        
      };
      
      
});
App.controller('courseController', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addCourse = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('addcourse');
             
        
      };
      
      $scope.deleteCourse=function(){
        $state.go('deletecourse');
      };

      $scope.AssignSectionsToCourses=function(){
        $state.go('assignsectionstocourse');
      };
      
      
});
App.controller('teaacherController', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addTeacer = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('addteacher');
             
        
      };
      
      $scope.editTeacher=function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
        $state.go('editteacher');
      };
      $scope.assignCourseAndSection=function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
        $state.go('assignsectionTeacher');
      };
      $scope.deleteTeacher=function(){
        $state.go('deleteteacher');
      };
      //  $scope.editparent=function(){
      //   $state.go('deleteparent');
      // };
});
App.controller('studentController', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addStudent = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('addStudent');
     
      };
      $scope.editStudent = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('editStudent');
     
      };
      $scope.deleteStudent = function(){
        
         
             $state.go('deleteStudent');
     
      };
      
    
     
});
App.controller('adminLogout', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.logoutfromAdminHomePage = function(){
        
         sessionStorage.clear();
             $state.go('page1');
             
        
      };
});