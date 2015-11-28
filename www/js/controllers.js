angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope,$state,$cordovaFacebook){
     var fbLogged = new Parse.Promise();
    
      //Parse.Cloud.useMasterKey();

  /*  
    var currentUser = Parse.User.current();
        if (currentUser) {
            $state.go('home');
        } else {

    }
    */
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
       { text: 'Import from Facebook' },
       { text: 'Take Picture' },
       { text: 'Import from Library' }
     ],
     titleText: 'When do you want to get your profile picture?',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
         if (index == 0){
             
         }
         else if(index == 1){
             
         }
         else if(index == 2){
             
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
.controller('ResultCtrl', function($ionicHistory,$scope,$ionicLoading,Food,$state){
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

     $scope.random = function() {
        return 0.5 - Math.random();
    }
     
     $scope.likeButton = function(id){
         var Like = Parse.Object.extend("Food");
         var like = new Like();
         like.id = id;
         
         like.increment("Like");
         like.save(null,{
             success: function(point){
                 point.increment("Like",1);
             },
             error: function(point,error){
              alert ("We are having problems liking this page. Please try again later.");   
             }
             
         });
     }

})
// Pub Controller
.controller('PubResultCtrl', function($ionicHistory,$scope,$ionicLoading,Pub,$state){
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
        return 0.5 - Math.random();
    }

})
//Nightlife Controller
.controller('ClubCtrl', function($ionicHistory,$scope,$ionicLoading,Nightlife,$state){
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
        return 0.5 - Math.random();
    }

})

// Parks and Greensways Controller
.controller('ParkCtrl', function($ionicHistory,$scope,$ionicLoading,ParksGreenways,$state){
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
        return 0.5 - Math.random();
    }

})

// Movies and Shows Controller
.controller('MoviesCtrl', function($ionicHistory,$scope,$ionicLoading,MoviesShows,$state){
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
        return 0.5 - Math.random();
    }

})

// Art and Museums Controller
.controller('ArtCtrl', function($ionicHistory,$scope,$ionicLoading,ArtMuseums,$state){
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
        return 0.5 - Math.random();
    }

})
;