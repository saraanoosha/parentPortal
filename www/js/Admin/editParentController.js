angular.module('starter.controllers',[])

App.controller('editParentController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.editParentBackButton = function(){
        
         $state.go('adminhome.parent');
      };

      //$scope.data ="hiiii";
     $scope.editParentSubmit = function(){

          var link = 'http://127.0.0.1:8080/myApp/admin/editParent.php';
          $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);

 
         $http.post(link, {adminID : $scope.sessionAdminId, fname : $scope.data.editparentFirstname, lname : $scope.data.editparentLastname, email : $scope.data.editparentEmail, password : $scope.data.editparentPassword,
          username : $scope.data.editparentUsername, cnic : $scope.data.editparentCNIC,
          address : $scope.data.editparentAddress, contactno : $scope.data.editparentContactNumber}).then(function (res){
            
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