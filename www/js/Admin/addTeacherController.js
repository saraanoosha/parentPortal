angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addTeacherController', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addTeachertBackButton= function(){
        
         
           $state.go('adminhome.teacher');

             
        
      };
      

   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addTeacherSubmit = function(){
         var link = 'http://127.0.0.1:8080/myApp/addTeacher.php';
 
         $http.post(link, {name : $scope.data.teacherName,address : $scope.data.teacherAddress, 
          cnic : $scope.data.teacherCnic, email : $scope.data.TeacherEmail,
          password : $scope.data.password, phone : $scope.data.phone}).then(function (res){
            
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