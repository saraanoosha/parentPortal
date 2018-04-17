angular.module('starter.controllers',[])

App.controller('editParentController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.editParentBackButton = function(){
        
         $state.go('adminhome.parent');
      };

      //$scope.data ="hiiii";
     $scope.editParentSubmit = function(){
          var link = 'http://127.0.0.1:8080/myApp/editParent.php';
 
         $http.post(link, {fname : $scope.data.editparentFirstname, lname : $scope.data.editparentLastname, email : $scope.data.editparentEmail, password : $scope.data.editparentPassword,
          username : $scope.data.editparentUsername, cnic : $scope.data.editparentCNIC,
          address : $scope.data.editparentAddress, contactno : $scope.data.editparentContactNumber}).then(function (res){
            
               $scope.found = res.data;
           // if($scope.found == "yes")
           //    {
           //   alert("User added");
           //     }
           //  else
           //    {
              
           //    alert("User doesn't exist");
              
           //     }

          });
       //  $state.go('adminhome.parent');
      };


      
});