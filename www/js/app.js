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
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/adminpages/teacher.html'
                  }
                }
           
                        
                  
                
            })
 .state('adminhome.course', {
                url: '/course',
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/adminpages/course.html'
                  }
                }
           
                        
                  
                
            })
 .state('adminhome.challan', {
                url: '/challan',
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/adminpages/challan.html'
                  }
                }
           
                        
                  
                
            })

 .state('adminhome.parent', {
                url: '/parent',
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/adminpages/parent.html'
                  }
                }
           
                        
                  
                
            })

  .state('adminhome.student', {
                url: '/student',
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/adminpages/student.html'
                  }
                }   
            })
  .state('parenthome.attendance', {
                url: '/checkattendance',
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/parentpages/checkAttendance.html'
                  }
                }   
            })
   .state('parenthome.result', {
                url: '/checkresult',
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/parentpages/checkResult.html'
                  }
                }   
            })
    .state('parenthome.challan', {
                url: '/checkchallan',
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/parentpages/seeChallan.html'
                  }
                }   
            })
    .state('parenthome.location', {
                url: '/checklocation',
                cache:false,
                views:{
                  'menuContent':{
                         templateUrl: 'pages/parentpages/seeLocations.html'
                  }
                }   
            })
        

    
    
    
    
        .state('teacherhome', {
      url: "/teacherhome",
      cache:false,
      templateUrl: "pages/teacherpages/teacherhome.html",
    
    })
        .state('parenthome', {
      url: "/parenthome",
      cache:false,
  
      templateUrl: "pages/parentpages/parentHome.html",
    
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
.state('addcourse',{
  url:"/addcourse",
  cache:false,
  templateUrl:'pages/adminpages/addCourse.html'
})
.state('issueChallan',{
  url:"/issueChallan",
  cache:false,
  templateUrl:'pages/adminpages/issueChallan.html'
})

.state('deletecourse',{
  url:"/deletecourse",
  cache:false,
  templateUrl:'pages/adminpages/deleteCourse.html'
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
    
    
  .state('addStudent',{
  url:"/addStudent",
  cache:false,
  templateUrl:'pages/adminpages/addStudent.html'
})  
  .state('editStudent',{
  url:"/editStudent",
  cache:false,
  templateUrl:'pages/adminpages/editStudent.html'
})  
 .state('deleteStudent',{
  url:"/deleteStudent",
  cache:false,
  templateUrl:'pages/adminpages/deleteStudent.html'
})  
.state('addteacher',{
  url:"/addteacher",
  cache:false,
  templateUrl:'pages/adminpages/addTeacher.html'
})
  .state('assignsectionTeacher',{
  url:"/assignSection",
  cache:false,
  templateUrl:'pages/adminpages/assignCourseAndSection.html'
}) 
  .state('editteacher',{
  url:"/editteacher",
  cache:false,
  templateUrl:'pages/adminpages/editTeacher.html'
})
  .state('deleteteacher',{
  url:"/deleteteacher",
  cache:false,
  templateUrl:'pages/adminpages/deleteTeacher.html'
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
     .state('challanGo', {
    url: "/challanGo",
    cache:false,
    templateUrl: 'pages/parentpages/studentChallan.html'
})
      .state('resultGo', {
    url: "/resultGo",
    cache:false,
    templateUrl: 'pages/parentpages/studentResult.html'
})
       .state('courseGo', {
    url: "/courseGo",
    cache:false,
    templateUrl: 'pages/parentpages/courseSelect.html'
})
//  .state('teacherprofile', {
//    url: "/teacherprofile",
//    cache:false,
//    templateUrl: 'pages/teacherpages/Teacherprofile.html'
//})
    


    
$urlRouterProvider.otherwise('/page1'); 
});
