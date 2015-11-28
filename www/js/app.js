// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','GSOData.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function($scope) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
      
      Parse.initialize("SQwOQRG77Srys4HiIBKdrPAQla89KPPSljjzMksv", "X3WmND91CkCfpT4ltb0gFB9h7yLm6BgVuAVyXvBV");
      
        $scope.currentUser = Parse.User.current();

      
      if(!(ionic.Platform.isIOS() || ionic.Platform.isAndroid())){
  window.fbAsyncInit = function() {
      Parse.FacebookUtils.init({
          appId      : '911530332265226', 
          version    : 'v2.3',
          xfbml      : true
      });
  };
 
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
}
      
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

 .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
  })
  
 .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
  })
  // Food Result - Home because of teting
  .state('result', {
        url: '/home/result',
        templateUrl: 'templates/home-detail.html',
        controller: 'ResultCtrl'
  })
  // Pub Result
   .state('pubresult', {
        url: '/home/pubresult',
        templateUrl: 'templates/pub-detail.html',
        controller: 'PubResultCtrl'
  })
  //NightLife Result
    .state('clubresult', {
        url: '/home/clubresult',
        templateUrl: 'templates/club-detail.html',
        controller: 'ClubCtrl'
  })
  // Park Result
    .state('parkresult', {
        url: '/home/parkresult',
        templateUrl: 'templates/park-detail.html',
        controller: 'ParkCtrl'
  })
  // Movies/Show Result
    .state('moviesresult', {
        url: '/home/moviesresult',
        templateUrl: 'templates/movies-detail.html',
        controller: 'MoviesCtrl'
  })
  // Art/Museums Result
    .state('artresult', {
        url: '/home/artresult',
        templateUrl: 'templates/art-detail.html',
        controller: 'ArtCtrl'
  });
    if (Parse.User.current()){
          $urlRouterProvider.otherwise('/home');
    }
    
    $urlRouterProvider.otherwise('/login');
});