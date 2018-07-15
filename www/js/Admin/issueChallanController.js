angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('issueChallanController', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.issueChallanBackButton= function(){
        
         
           $state.go('adminhome.challan');

             
        
      };
      

   $scope.data = {};

var allstudentlink = 'http://localhost:8080/myApp/admin/retrieveAllStudents.php';
$http.post(allstudentlink, {}).then(function (res){
         $scope.allstudentsfound = res.data;
         console.log($scope.allstudentsfound);

           });

      //$scope.data ="hiiii";
     $scope.issueChallanSubmit = function(){
         var link = 'http://localhost:8080/myApp/admin/issueChallan.php';
          var selectedStudent=$scope.data.student;
         console.log(selectedStudent);
         $http.post(link, {studentid :selectedStudent, regFee: $scope.data.registerationFee, 
          tuiFee : $scope.data.tuitionFee, finee: $scope.data.fine, finef:$scope.data.finefor, challanIssueDate: $scope.data.issueDate,
          challanSubmissionDate : $scope.data.submissionDate, chllanIssuedBy : $scope.data.issuedBy, challanStatus: $scope.data.status}).then(function (res){
            
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