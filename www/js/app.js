// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    
    .state('app', {
        abstract: true,
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.list', {
        url: '/list',
        views: {
          'menuContent': {
                templateUrl: 'templates/list.html',
                controller: 'listScreenCtrl'
            }
        }    
    })

    .state('app.list.chatPage',{
        url: '/chatPage',
        views:{
            'menuContent@app': {
                templateUrl: 'templates/chatPage.html'
            }
        }
    })
  
    .state('app.chatScreen', {
        url: '/chatScreen',
        views: {
          'menuContent': {
                templateUrl: 'templates/chatScreen.html'//,
                // controller: 'chatScreenCtrl'
            }
        }    
    })

    .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
                templateUrl: 'templates/settings/settings.html'//,
                // controller: 'extraScreenCtrl'
            }
        }    
    })

    .state('app.settings.profile', {
        url: '/profile',
        views: {
          'menuContent@app': {
                templateUrl: 'templates/settings/profile.html'//,
                // controller: 'extraScreenCtrl'
            }
        }    
    })

    .state('app.settings.chatSettings', {
        url: '/chatSettings',
        views: {
          'menuContent@app': {
                templateUrl: 'templates/settings/chatSettings.html'
            }
        }    
    })

    .state('app.settings.notifications', {
        url: '/notification',
        views: {
          'menuContent@app': {
                templateUrl: 'templates/settings/notification.html'
            }
        }    
    })

    .state('app.settings.account', {
        url: '/account',
        views: {
          'menuContent@app': {
                templateUrl: 'templates/settings/account.html'
            }
        }    
    })

    .state('app.settings.help', {
        url: '/help',
        views: {
          'menuContent@app': {
                templateUrl: 'templates/settings/help.html'
            }
        }    
    })

    .state('app.status', {
        url: '/status',
        views: {
          'menuContent': {
                templateUrl: 'templates/status.html'
            }
        }    
    })
    

  

    ; $urlRouterProvider.otherwise('/app/list');

});