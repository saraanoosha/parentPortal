angular.module('starter.controllers',[])

App.controller('editStudentController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.editStudentBackButton = function(){
        
         $state.go('adminhome.student');
      };

      //$scope.data ="hiiii";
     $scope.updateStudentSubmit = function(){
          $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
          var link = 'http://127.0.0.1:8080/myApp/admin/editStudent.php';

          $http.post(link, {adminid : $scope.sessionAdminId, fname : $scope.data.StudentFirstname, lname : $scope.data.studentLastname, std_email : $scope.data.studentEmail, std_username : $scope.data.studentUserName,
          std_password : $scope.data.studentPassword, program : $scope.data.ProgramSelect,
          std_rollno : $scope.data.studentRollNo, std_address : $scope.data.studentAddress, gender : $scope.data.genderSelect,
          date : $scope.data.dueDate, std_cnic: $scope.data.studentCinic, parent_cnic: $scope.data.parentCNIC}).then(function (res){
            
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