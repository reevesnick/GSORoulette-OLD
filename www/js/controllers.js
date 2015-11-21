angular.module('starter.controllers', [])


.controller('LoginCtrl', function(){

})
.controller('HomeCtrl',['$scope','$state' ,function($scope,$state){
    
    $scope.foodSelect = function(){
        $state.go('result');
    }

}])

.controller('ResultCtrl', function(){

});