angular.module('starter.controllers', [])



.controller('LoginCtrl', function($scope,$state,$cordovaFacebook){
     var fbLogged = new Parse.Promise();
    
      //Parse.Cloud.useMasterKey();

  
    var currentUser = Parse.User.current();
        if (currentUser) {
            $state.go('home');
        } else {

    }
    
  var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
      return;
    }
    var expDate = new Date(
      new Date().getTime() + response.authResponse.expiresIn * 1000
    ).toISOString();

    var authData = {
      id: String(response.authResponse.userID),
      access_token: response.authResponse.accessToken,
      expiration_date: expDate
    }
    fbLogged.resolve(authData);
    console.log(response);
  };
    
    
 var fbLoginError = function(error){
    fbLogged.reject(error);
  };
    
    $scope.loginFacebook = function(){
         console.log('Login');
    if (!window.cordova) {
      facebookConnectPlugin.browserInit('911530332265226');
    }
    facebookConnectPlugin.login(['email,user_friends,public_profile'], fbLoginSuccess, fbLoginError);
  
    fbLogged.then( function(authData) {
      console.log('Promised');
      return Parse.FacebookUtils.logIn(authData);
    })
    .then( function(userObject) {
      facebookConnectPlugin.api('/me', null, 
        function(response) {
          console.log(response);
          userObject.set('name', response.name);
          userObject.set('email', response.email);
          userObject.set('facebookId', response.id);
          userObject.save();
        },
        function(error) {
          console.log(error);
        }
      );
      $state.go('home');
    }, function(error) {
      console.log(error);
        alert ("Having Trouble Authorizing to Facebook. Please Try again Later");
    });   
};
    
    
})
.controller('HomeCtrl',['$scope','$state','Food','Pub','$ionicLoading','$ionicActionSheet' ,function($scope,$state,Food,Pub,$ionicLoading,$ionicActionSheet){
    
      var fbLogged = new Parse.Promise();

    var fbLoginSuccess = function(response) {
        if (!response.authResponse){
            fbLoginError("Cannot find the authResponse");
            return;
        }
        var expDate = new Date(
            new Date().getTime() + response.authResponse.expiresIn * 1000
        ).toISOString();

        var authData = {
            id: String(response.authResponse.userID),
            access_token: response.authResponse.accessToken,
            expiration_date: expDate
        }
        fbLogged.resolve(authData);
        fbLoginSuccess = null;
        console.log(response);
    };

    var fbLoginError = function(error){
        fbLogged.reject(error);
    };
    
    $scope.currentUser = Parse.User.current();
    
    $scope.profileSettings = function(){
        
   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Post App to Wall' },
       { text: 'Share Status' }
     ],
     titleText: 'Facebook Settings',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
         if (index == 0){
                    facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'GSORoulette',
        message:'',    
        caption: 'Download the App on the App Store/Google Play Store',
        description: 'Check out the GSORoulette on the App Store and the Google Play Store to find places around Greensboro'
    }, 
    function (response) { alert(JSON.stringify(response)) },
    function (response) { alert(JSON.stringify(response)) });
         }
         else if(index == 1){
             var status = "<html><p>{{currentUser.get('name')}} has {{currentUser.get('likes')}} Likes</p></html>";
                           facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'GSORoulette',
        message:'',    
        caption: 'Status',
        description: status
    }, 
    function (response) { alert(JSON.stringify(response)) },
    function (response) { alert(JSON.stringify(response)) });
         }
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);


}

    
    //Select Food
    $scope.foodSelect = function(){
        // Loading Screen
        var _this = this
            $ionicLoading.show({
                template: 'Searching the GSO'
        })
       Food.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('result');

            }).then(function(result) {
            $ionicLoading.hide()
       });
    }
 
    //Select Pub
     $scope.pubSelect = function(){
        // Loading Screen
        var _this = this
            $ionicLoading.show({
                template: 'Searching the GSO'
        })
       Pub.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('pubresult');

            }).then(function(result) {
            $ionicLoading.hide()
       });
    }
 
    //Select Club
     $scope.clubSelect = function(){
        // Loading Screen
        var _this = this
            $ionicLoading.show({
                template: 'Searching the GSO'
        })
       Pub.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('clubresult');

            }).then(function(result) {
            $ionicLoading.hide()
       });
    }
     
    //Select Parks
     $scope.parkSelect = function(){
        // Loading Screen
        var _this = this
            $ionicLoading.show({
                template: 'Searching the GSO'
        })
       Pub.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('parkresult');

            }).then(function(result) {
            $ionicLoading.hide()
       });
    }
 
    //Select Movies
     $scope.moviesSelect = function(){
        // Loading Screen
        var _this = this
            $ionicLoading.show({
                template: 'Searching the GSO'
        })
       Pub.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('moviesresult');

            }).then(function(result) {
            $ionicLoading.hide()
       });
    }
     
    //Select Art and Museums
     $scope.artSelect = function(){
        // Loading Screen
        var _this = this
            $ionicLoading.show({
                template: 'Searching the GSO'
        })
       Pub.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('artresult');

            }).then(function(result) {
            $ionicLoading.hide()
       });
    }
    
}])
// Food Control
.controller('ResultCtrl', function($ionicHistory,$scope,$ionicLoading,Food,$state,$ionicPopup, $window){
 $scope.myGoBack = function(){
    $ionicHistory.goBack();
  }
 
 var _this = this
  $ionicLoading.show({
    template: 'Searching the GSO'
  })
       Food.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('result');

        }).then(function(result) {
    $ionicLoading.hide()
   // _this.breweries = result.data.breweries
  });

    
     $scope.random = function(){
        return Math.random(5%5);
     }
    

    
     $scope.directions = function(){
            directions.navigateToAddress(items.directions);      
     }
     
     $scope.likeButton = function(){
         Parse.User.current().increment('likes').save();

     }
     
      $scope.recommendedButton = function(){
         Parse.User.current().increment('recommend').save();
          
          var recommendedPopup = $ionicPopup.confirm({
              title: 'Share Recommendation',
              template:'Do you want to share your recommendations to your Facebook?'
          });
          
          recommendedPopup.then(function(res){
              if (res){  
          facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'GSORoulette',
        message:'',    
        caption: 'Recommended Item in Greensboro',
        description: 'Recommended a place in Greensboro. Check out the App.'
    }, 
    function (response) { console.log(JSON.stringify(response)) },
    function (response) { console.log(JSON.stringify(response)) });
      
              }
              
              else{
                  
              }
          });  
     }  
      
      $scope.checkIn = function(){
         Parse.User.current().increment('checkin').save();
     }

})
// Pub Controller
.controller('PubResultCtrl', function($ionicHistory,$scope,$ionicLoading,Pub,$state,$ionicPopup){
 $scope.myGoBack = function(){
    $ionicHistory.goBack();
  }
 
 var _this = this
  $ionicLoading.show({
    template: 'Searching the GSO'
  })
       Pub.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('pubresult');

        }).then(function(result) {
    $ionicLoading.hide()
   // _this.breweries = result.data.breweries
  });

     $scope.random = function() {
        return Math.random(5);
    }
     
          
       $scope.directions = function(){
            directions.navigateToAddress(items.directions);      
     }
     
     $scope.likeButton = function(){
         Parse.User.current().increment('likes').save();

     }
     
      $scope.recommendedButton = function(){
         Parse.User.current().increment('recommend').save();
          
          var recommendedPopup = $ionicPopup.confirm({
              title: 'Share Recommendation',
              template:'Do you want to share your recommendations to your Facebook?'
          });
          
          recommendedPopup.then(function(res){
              if (res){  
          facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'GSORoulette',
        message:'',    
        caption: 'Recommended Item in Greensboro',
        description: 'Recommended a place in Greensboro. Check out the App.'
    }, 
    function (response) { console.log(JSON.stringify(response)) },
    function (response) { console.log(JSON.stringify(response)) });
      
              }
              
              else{
                  
              }
          });  
     }  
      
      $scope.checkIn = function(){
         Parse.User.current().increment('checkin').save();
     }

})
//Nightlife Controller
.controller('ClubCtrl', function($ionicHistory,$scope,$ionicLoading,Nightlife,$state,$ionicPopup){
 $scope.myGoBack = function(){
    $ionicHistory.goBack();
  }
 
 var _this = this
  $ionicLoading.show({
    template: 'Searching the GSO'
  })
       Nightlife.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('clubresult');

        }).then(function(result) {
    $ionicLoading.hide()
   // _this.breweries = result.data.breweries
  });

     $scope.random = function() {
        return Math.random(5%5);
    }
     
      $scope.directions = function(){
            directions.navigateToAddress(items.directions);      
     }
     
     $scope.likeButton = function(){
         Parse.User.current().increment('likes').save();

     }
     
      $scope.recommendedButton = function(){
         Parse.User.current().increment('recommend').save();
          
          var recommendedPopup = $ionicPopup.confirm({
              title: 'Share Recommendation',
              template:'Do you want to share your recommendations to your Facebook?'
          });
          
          recommendedPopup.then(function(res){
              if (res){  
          facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'GSORoulette',
        message:'',    
        caption: 'Recommended Item in Greensboro',
        description: 'Recommended a place in Greensboro. Check out the App.'
    }, 
    function (response) { console.log(JSON.stringify(response)) },
    function (response) { console.log(JSON.stringify(response)) });
      
              }
              
              else{
                  
              }
          });  
     }  
      
      $scope.checkIn = function(){
         Parse.User.current().increment('checkin').save();
     }

})

// Parks and Greensways Controller
.controller('ParkCtrl', function($ionicHistory,$scope,$ionicLoading,ParksGreenways,$state,$ionicPopup){
 $scope.myGoBack = function(){
    $ionicHistory.goBack();
  }
 
 var _this = this
  $ionicLoading.show({
    template: 'Searching the GSO'
  })
       ParksGreenways.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('parkresult');

        }).then(function(result) {
    $ionicLoading.hide()
   // _this.breweries = result.data.breweries
  });

     $scope.random = function() {
        return Math.random(5%5);
    }
     
      $scope.directions = function(){
            directions.navigateToAddress(items.directions);      
     }
     
     $scope.likeButton = function(){
         Parse.User.current().increment('likes').save();

     }
     
      $scope.recommendedButton = function(){
         Parse.User.current().increment('recommend').save();
          
          var recommendedPopup = $ionicPopup.confirm({
              title: 'Share Recommendation',
              template:'Do you want to share your recommendations to your Facebook?'
          });
          
          recommendedPopup.then(function(res){
              if (res){  
          facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'GSORoulette',
        message:'',    
        caption: 'Recommended Item in Greensboro',
        description: 'Recommended a place in Greensboro. Check out the App.'
    }, 
    function (response) { console.log(JSON.stringify(response)) },
    function (response) { console.log(JSON.stringify(response)) });
      
              }
              
              else{
                  
              }
          });  
     }  
      
      $scope.checkIn = function(){
         Parse.User.current().increment('checkin').save();
     }

})

// Movies and Shows Controller
.controller('MoviesCtrl', function($ionicHistory,$scope,$ionicLoading,MoviesShows,$state,$ionicPopup){
 $scope.myGoBack = function(){
    $ionicHistory.goBack();
  }
 
 var _this = this
  $ionicLoading.show({
    template: 'Searching the GSO'
  })
       MoviesShows.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('moviesresult');

        }).then(function(result) {
    $ionicLoading.hide()
   // _this.breweries = result.data.breweries
  });

     $scope.random = function() {
        return Math.random(5%5);
    }

     
      $scope.directions = function(){
            directions.navigateToAddress(items.directions);      
     }
     
     $scope.likeButton = function(){
         Parse.User.current().increment('likes').save();

     }
     
      $scope.recommendedButton = function(){
         Parse.User.current().increment('recommend').save();
          
          var recommendedPopup = $ionicPopup.confirm({
              title: 'Share Recommendation',
              template:'Do you want to share your recommendations to your Facebook?'
          });
          
          recommendedPopup.then(function(res){
              if (res){  
          facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'GSORoulette',
        message:'',    
        caption: 'Recommended Item in Greensboro',
        description: 'Recommended a place in Greensboro. Check out the App.'
    }, 
    function (response) { console.log(JSON.stringify(response)) },
    function (response) { console.log(JSON.stringify(response)) });
      
              }
              
              else{
                  
              }
          });  
     }  
      
      $scope.checkIn = function(){
         Parse.User.current().increment('checkin').save();
     }
})

// Art and Museums Controller
.controller('ArtCtrl', function($ionicHistory,$scope,$ionicLoading,ArtMuseums,$state,$ionicPopup){
 $scope.myGoBack = function(){
    $ionicHistory.goBack();
  }
 
 var _this = this
  $ionicLoading.show({
    template: 'Searching the GSO'
  })
       ArtMuseums.getAll().success(function(data){
            $scope.items=data.results;
                $state.go('artresult');

        }).then(function(result) {
    $ionicLoading.hide()
   // _this.breweries = result.data.breweries
  });

     $scope.random = function() {
        return Math.random(5%5);
    }
     
      $scope.directions = function(){
            directions.navigateToAddress(items.directions);      
     }
     
     $scope.likeButton = function(){
         var _this = this
  $ionicLoading.show({
    template: 'Liking'
  })
         Parse.User.current().increment('likes').save().then(function(result) {
    $ionicLoading.hide()
   // _this.breweries = result.data.breweries
  });

     }
     
      $scope.recommendedButton = function(){
         Parse.User.current().increment('recommend').save();
          
          var recommendedPopup = $ionicPopup.confirm({
              title: 'Share Recommendation',
              template:'Do you want to share your recommendations to your Facebook?'
          });
          
          recommendedPopup.then(function(res){
              if (res){  
          facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'GSORoulette',
        message:'',    
        caption: 'Recommended Item in Greensboro',
        description: 'Recommended a place in Greensboro. Check out the App.'
    }, 
    function (response) { console.log(JSON.stringify(response)) },
    function (response) { console.log(JSON.stringify(response)) });
      
              }
              
              else{
                  
              }
          });  
     }  
      
      $scope.checkIn = function(){
         Parse.User.current().increment('checkin').save();
     }

})
;