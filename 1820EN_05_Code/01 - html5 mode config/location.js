angular.module('location', [], function ($locationProvider) {
    $locationProvider.html5Mode(true);
    console.log($locationProvider);
})
    .controller('MainCtrl', function ($scope, $location) {
        $scope.location = $location;
    });