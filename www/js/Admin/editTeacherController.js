angular.module('starter.controllers',[])

App.controller('editTeacherController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.editTeachertBackButton = function(){
        
         $state.go('adminhome.teacher');
      };

      //$scope.data ="hiiii";
     $scope.editTeacherSubmit = function(){
          var link = 'http://127.0.0.1:8080/myApp/editTeacher.php';

    $http.post(link, {name : $scope.data.teacherName, course : $scope.data.course, address : $scope.data.teacherAddress, section : $scope.data.section,
          cnic : $scope.data.teacherCnic, email : $scope.data.TeacherEmail,
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