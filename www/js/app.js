// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var App=angular.module('starter',  ['ionic',"starter.controllers"])







.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  
  
 


 .state('adminhome.teacher', {
                url: '/teacher',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/adminpages/teacher.html'
                  }
                }
           
                        
                  
                
            })
 .state('adminhome.parent', {
                url: '/parent',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/adminpages/parent.html'
                  }
                }
           
                        
                  
                
            })

  .state('adminhome.student', {
                url: '/student',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/adminpages/student.html'
                  }
                }
           
                        
                  
                
            })
        

    
    
    
    
        .state('teacherhome', {
      url: "/teacherhome",
  
      templateUrl: "pages/teacherpages/teacherhome.html",
    
    })
    
      .state('teacherhome.home', {
                url: '/home',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/home.html'
                  }
                }
           
                        
                  
                
            })
    
      .state('teacherhome.profile', {
                url: '/profile',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/profile.html'
                  }
                }
           
                        
                  
                
            })
    
    
      .state('teacherhome.createtest', {
                url: '/createtest',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/createtest.html'
                  }
                }
           
                        
                  
                
            })
    
       .state('teacherhome.marks', {
                url: '/marks',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/marks.html'
                  }
                }
           
                        
                  
                
            })
    
      .state('teacherhome.addTest', {
                url: '/addtest',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/addTest.html'
                  }
                }
           
                        
                  
                
            })
    
     .state('teacherhome.MarksAdd', {
                url: '/AddMarks',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/MarksAdd.html'
                  }
                }
           
                        
                  
                
            })
    
      .state('teacherhome.Attendencehome', {
                url: '/Attendence',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/Attendencehome.html'
                  }
                }
           
                        
                  
                
            })
    
       .state('teacherhome.Addattendence', {
                url: '/AddAttendence',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/Addattendence.html'
                  }
                }
           
                        
                  
                
            })
    
       .state('teacherhome.deletetest', {
                url: '/delete',
                views:{
                  'menuContent':{
                         templateUrl: 'pages/teacherpages/deletetest.html'
                  }
                }
           
                        
                  
                
            })
    
    
    
    
   
    



  .state('page1', {
    url: "/page1",
    cache:false,
    templateUrl: 'pages/page1.html'
})

.state('page3', {
    url: "/page3",
    cache:false,
    templateUrl: 'pages/page3.html'
}) 
.state('page4', {
    url: "/page4",
    cache:false,
    templateUrl: 'pages/page4.html'
}) 
.state('adminhome',{
  url:"/adminhome",
  cache:false,
  templateUrl:'pages/adminhome.html'
})
.state('addparent',{
  url:"/addparent",
  cache:false,
  templateUrl:'pages/adminpages/Addparent.html'
})
.state('deleteparent',{
  url:"/deleteparent",
  cache:false,
  templateUrl:'pages/adminpages/deleteParent.html'
})
.state('editparent',{
  url:"/editparent",
  cache:false,
  templateUrl:'pages/adminpages/editParent.html'
})
    
    
    
 
    
//    .state('teacherhome', {
//    url: "/teacherhome",
//    cache:false,
//    templateUrl: 'pages/teacherpages/teacherhome.html'
//}) 
    
    .state('teacherlogin', {
    url: "/Teacherlogin",
    cache:false,
    templateUrl: 'pages/teacherpages/Teacherlogin.html'
}) 
    
     .state('test', {
    url: "/test",
    cache:false,
    templateUrl: 'pages/teacherpages/test.html'
})
//  .state('teacherprofile', {
//    url: "/teacherprofile",
//    cache:false,
//    templateUrl: 'pages/teacherpages/Teacherprofile.html'
//})
    


    
$urlRouterProvider.otherwise('/page1'); 
});
