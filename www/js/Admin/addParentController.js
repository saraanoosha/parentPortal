angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addParentController', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addParentBackButton= function(){
        
         
           $state.go('adminhome.parent');

             
        
      };
      

   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addParentSubmit = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);

         var link = 'http://127.0.0.1:8080/myApp/admin/addParent.php';
 
         $http.post(link, {adminID: $scope.sessionAdminId,fname : $scope.data.parentFirstname, lname : $scope.data.parentLastname, email : $scope.data.parentEmail, password : $scope.data.parentPassword,
          username : $scope.data.parentUsername, cnic : $scope.data.parentCNIC,
          address : $scope.data.parentAddress, contactno : $scope.data.parentContactNumber}).then(function (res){
            
               $scope.found = res.data;
           if($scope.found == "yup")
              {
            alert("added");
              }
              if($scope.found != "yup")
              {
            alert("added");
              }
            // else
            //   {
              
            //   alert("User not added");
              
            //    }


          });
      };


      
});