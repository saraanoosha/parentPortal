angular.module('starter.controllers',[])

App.controller('editStudentController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.editStudentBackButton = function(){
        
         $state.go('adminhome.student');
      };

      //$scope.data ="hiiii";
     $scope.updateStudentSubmit = function(){
          var link = 'http://localhost:8080/myApp/admin/editStudent.php';

    $http.post(link, {fname : $scope.data.StudentFirstname, lname : $scope.data.studentLastname, rollno : $scope.data.studentRollNo, address : $scope.data.studentAddress,
          date : $scope.data.dueDate, batch : $scope.data.batch,
          gender : $scope.data.genderSelect, section : $scope.data.section, parentCnic : $scope.data.parentCnic,
          parentID : $scope.data.parentID}).then(function (res){
            
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