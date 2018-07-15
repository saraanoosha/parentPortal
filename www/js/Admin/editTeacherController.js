angular.module('starter.controllers',[])

App.controller('editTeacherController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.editTeachertBackButton = function(){
        
         $state.go('adminhome.teacher');
      };

      //$scope.data ="hiiii";
     $scope.editTeacherSubmit = function(){

          var link = 'http://127.0.0.1:8080/myApp/admin/editTeacher.php';


    $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
          $http.post(link, {Desig:$scope.data.teacherDesignation, adminID: $scope.sessionAdminId,fname : $scope.data.teacherfName,lname : $scope.data.teacherlName,address : $scope.data.teacherAddress, 
          cnic : $scope.data.teacherCnic, email : $scope.data.TeacherEmail, username : $scope.data.Teacherusername,
          password : $scope.data.password, phone : $scope.data.phone}).then(function (res){
               $scope.found = res.data;
           if($scope.found == "yes")
              {
             alert("updated");
               }
            else
              {
              
              alert("this User doesn't exist");
              
               }

          });
       //  $state.go('adminhome.parent');
      };


      
});