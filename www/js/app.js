// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ticketApp', [
    'ionic',
    'tabController',
    'seatController'
    ])

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

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $urlRouterProvider.otherwise('/tab/seats');
    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'ng/tabs/tabs.tpl.html',
            controller: 'tabController'
        })
        .state('tab.seats', {
            url: '/seats',
            views: {
              'tab-seats': {
                templateUrl: 'ng/seats/seat.tpl.html',
                controller: 'seatController'
              }
            },
        });

    $ionicConfigProvider.tabs.position('bottom');
});