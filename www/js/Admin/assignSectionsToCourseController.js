angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('assignSectionsToCourseController', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.assignSectionsToCourseBackButton= function(){
        
         
           $state.go('adminhome.course');

             
        
      };
      

   $scope.data = {};
      //$scope.data ="hiiii";
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

     $scope.addCourseSubmit = function(){

      

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

         var link = 'http://127.0.0.1:8080/myApp/admin/assignSectionsToCourse.php';
 
         $http.post(link, {section : selectedSection, course : selectedCourse, prog : selectedProg, batch: selectedBatch, sem: selectedSemester}).then(function (res){
            
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