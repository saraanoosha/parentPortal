angular.module('starter.controllers',[])

App.controller('parentcontroller', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addparent1 = function(){
        
         
             $state.go('addparent');
             
        
      };
      
      $scope.Deleteparent=function(){
        $state.go('deleteparent');
      };
      $scope.editparent=function(){
        $state.go('editparent');
      };
      //  $scope.editparent=function(){
      //   $state.go('deleteparent');
      // };
});
App.controller('challanController', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.IssueChallan = function(){
        
         
             $state.go('issueChallan');
             
        
      };
      
      
});
App.controller('courseController', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addCourse = function(){
        
         
             $state.go('addcourse');
             
        
      };
      
      $scope.deleteCourse=function(){
        $state.go('deletecourse');
      };
      
      
});
App.controller('teaacherController', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addTeacer = function(){
        
         
             $state.go('addteacher');
             
        
      };
      
      $scope.editTeacher=function(){
        $state.go('editteacher');
      };
      $scope.assignCourseAndSection=function(){
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
        
         
             $state.go('addStudent');
     
      };
      $scope.editStudent = function(){
        
         
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
        
         
             $state.go('page1');
             
        
      };
});