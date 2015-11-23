angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope,$state,$cordovaFacebook){
    $scope.loginFacebook = function(){
 
  //Browser Login
  if(!(ionic.Platform.isIOS() || ionic.Platform.isAndroid())){
 
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
        console.log(user);
        if (!user.existed()) {
          alert("User signed up and logged in through Facebook!");
        } else {
          alert("User logged in through Facebook!");
        }
      },
      error: function(user, error) {
        alert("User cancelled the Facebook login or did not fully authorize.");
      }
    });
 
  } 
  //Native Login
  else {
 
    $cordovaFacebook.login(["public_profile", "email"]).then(function(success){
 
      console.log(success);
 
      //Need to convert expiresIn format from FB to date
      var expiration_date = new Date();
      expiration_date.setSeconds(expiration_date.getSeconds() + success.authResponse.expiresIn);
      expiration_date = expiration_date.toISOString();
 
      var facebookAuthData = {
        "id": success.authResponse.userID,
        "access_token": success.authResponse.accessToken,
        "expiration_date": expiration_date
      };
 
      Parse.FacebookUtils.logIn(facebookAuthData, {
        success: function(user) {
          console.log(user);
          if (!user.existed()) {
            alert("User signed up and logged in through Facebook!");
              $state.go('home');
          } else {
            alert("User logged in through Facebook!");
                    $state.go('home');
          }
        },
        error: function(user, error) {
          alert("User cancelled the Facebook login or did not fully authorize.");
        }
      });
 
    }, function(error){
      console.log(error);
    });
 
  }
 
};
})
.controller('HomeCtrl',['$scope','$state','Food','$ionicLoading' ,function($scope,$state,Food,$ionicLoading){
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
 
}])

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

});