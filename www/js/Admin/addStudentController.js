angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addStudentController', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addStudentBackButton= function(){
        
         
           $state.go('adminhome.student');

             
        
      };
      

   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addStudentSubmit = function(){
         var link = 'http://127.0.0.1:8080/myApp/addStudent.php';
 
         $http.post(link, {fname : $scope.data.StudentFirstname, lname : $scope.data.studentLastname, rollno : $scope.data.studentRollNo, address : $scope.data.studentAddress,
          date : $scope.data.dueDate, batch : $scope.data.batch,
          gender : $scope.data.genderSelect, section : $scope.data.section, parentCnic : $scope.data.parentCnic,
          parentID : $scope.data.parentID}).then(function (res){
            
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