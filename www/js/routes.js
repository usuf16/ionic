angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('accord', {
      url: '/accordlogin',
      templateUrl: 'templates/accord.html',
      controller: 'accordCtrl'
    })
        
      
    
      
        
    .state('tabsController.caseFile', {
      url: '/casefile',
      views: {
        'tab7': {
          templateUrl: 'templates/caseFile.html',
          controller: 'caseFileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.hearing', {
      url: '/hearing',
      views: {
        'tab8': {
          templateUrl: 'templates/hearing.html',
          controller: 'hearingCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.meeting', {
      url: '/meeting',
      views: {
        'tab9': {
          templateUrl: 'templates/meeting.html',
          controller: 'meetingCtrl'
        }
      }
    })

    .state('tabsController.billing', {
      url: '/billing',
      views: {
        'tab10': {
          templateUrl: 'templates/billing.html',
          controller: 'billingCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('fileDetails', {
      url: '/filedetails',
      templateUrl: 'templates/fileDetails.html',
      controller: 'fileDetailsCtrl'
    })
        
      
    
      
        
    .state('billing', {
      url: '/billing',
      templateUrl: 'templates/billing.html',
      controller: 'billingCtrl'
    })
        
      
    
      
        
    .state('hearingDetails', {
      url: '/hearingdetails',
      templateUrl: 'templates/hearingDetails.html',
      controller: 'hearingDetailsCtrl'
    })
        
      
    
      
        
    .state('billingDetails', {
      url: '/billingdetails',
      templateUrl: 'templates/billingDetails.html',
      controller: 'billingDetailsCtrl'
    })
        
      
    
      
        
    .state('meetingDetails', {
      url: '/meetingdetails',
      templateUrl: 'templates/meetingDetails.html',
      controller: 'meetingDetailsCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/accordlogin');

});