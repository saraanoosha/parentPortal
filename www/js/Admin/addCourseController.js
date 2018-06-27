angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addCourseController', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addCourseBackButton= function(){
        
         
           $state.go('adminhome.course');

             
        
      };
      

   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addCourseSubmit = function(){
         var link = 'http://127.0.0.1:8080/myApp/addCourse.php';
 
         $http.post(link, {courseName : $scope.data.courseName, courseCode : $scope.data.courseCode}).then(function (res){
            
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