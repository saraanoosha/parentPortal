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
         var link = 'http://127.0.0.1:8080/myApp/admin/addTeacher.php';
         $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
          $http.post(link, {Desig:$scope.data.teacherDesignation ,adminID: $scope.sessionAdminId,fname : $scope.data.teacherfName,lname : $scope.data.teacherlName,address : $scope.data.teacherAddress, 
          cnic : $scope.data.teacherCnic, email : $scope.data.TeacherEmail, username : $scope.data.Teacherusername,
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