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


        


      

        var selectedBatch=$scope.data.batch;
        console.log(selectedBatch);
        var selectedProg=$scope.data.program;
        console.log(selectedProg);
        var selectedSemester=$scope.data.yesSemester;
        console.log(selectedSemester);

         var link = 'http://127.0.0.1:8080/myApp/admin/addCourse.php';
 
         $http.post(link, {courseName : $scope.data.courseName, prog : selectedProg, batch: selectedBatch, sem: selectedSemester}).then(function (res){
            
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