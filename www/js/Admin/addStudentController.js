angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addStudentController', function($scope, $http,$state) {


var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/retrieveProgram.php';
      $http.post(ShowProglink, {}).then(function (res){
         $scope.allprogfound = res.data;
         console.log($scope.allprogfound);

           });

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
          $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         var link = 'http://127.0.0.1:8080/myApp/admin/addStudent.php';
 
         $http.post(link, {adminid : $scope.sessionAdminId, fname : $scope.data.StudentFirstname, lname : $scope.data.studentLastname, std_email : $scope.data.studentEmail, std_username : $scope.data.studentUserName,
          std_password : $scope.data.studentPassword, program : $scope.data.ProgramSelect,
          std_rollno : $scope.data.studentRollNo, std_address : $scope.data.studentAddress, gender : $scope.data.genderSelect,
          date : $scope.data.dueDate, std_cnic: $scope.data.studentCinic, parent_cnic: $scope.data.parentCNIC}).then(function (res){
            
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