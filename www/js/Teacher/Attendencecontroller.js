angular.module('starter.controllers',[])

App.controller('Attendencecontroller', function($scope, $http,$state,attendence){
    
   //$scope.Attendence = attendence;
    

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
     
      var link = 'http://localhost:8080/myApp/Teacher/attendencelist.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
   
                   $scope.attendence1=res.data;
                   console.log($scope.attendence1);
               
              
                   
                   
                   
            
 

       });
    
        $scope.attendence3 = function(data){
            
 
             if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
        
     
      console.log(pos);
        
        
        var triangleCoords = [
          {lat: 31.571683 ,lng:74.309718},
          {lat: 31.573904, lng:74.305030},
          
            {lat: 31.576057, lng: 74.307342}
        ];
            var e = new google.maps.LatLng(31.574953,74.307286);
            var pos1 = new google.maps.LatLng(31.574896  , 74.308003);
            
             var bermudaTriangle = new google.maps.Polygon({paths: triangleCoords});
            var resultColor =
              google.maps.geometry.poly.containsLocation(e, bermudaTriangle) ?
              'blue' :
              'red';
        
         var resultPath = google.maps.geometry.poly.containsLocation(e, bermudaTriangle) ?
              // A triangle.
              "m 0 -1 l 1 2 -2 0 z" :
             google.maps.SymbolPath.CIRCLE;
          
       
    var sw = new google.maps.LatLng(e.lat() - 0.1, e.lng() - 0.1);
    var ne = new google.maps.LatLng(e.lat() + 0.1, e.lng() + 0.1);
    var bounds = new google.maps.LatLngBounds(sw, ne);
    if (bounds.contains (pos)){
    	console.log("true");
        
         var batch = data.batchyear;
            var section = data.sectionname;
            var program = data.program;
            var semester= data.semester;
           var course= data.coursename;
          

$state.go('teacherhome.Addattendence',
          
          
          {batch:batch,section:section,program:program,semester:semester,course:course} );
        
    }
        
            
            else{


    alert("you are not in the bounds to add attendence")
            }



        

   
        
        
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
          
          }
            
            
   
      
            
           
            
            
        
        
    };
    $scope.view=function(x){
        console.log(x);
        
        sessionStorage.setItem('cid',x.cid);
    
      
              
        $state.go('teacherhome.retrievedateattendence');
        
        
        
    }
    

    
    

      
});




