angular.module('directives.pwd-custom', [])
    .controller('PwdCustomCtrl', function ($scope) {
        $scope.bothPwdMatch = function () {
            return $scope.passwordForm.$dirty && $scope.passwordForm.$valid;
        }
    })
    .directive('validateEquals', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                //console.log(ngModelCtrl);

                function validateEqual(myValue) {
                    //console.log(myValue, scope.$eval(attrs.validateEquals));
                    var valid = (myValue === scope.$eval(attrs.validateEquals));
                    ngModelCtrl.$setValidity('equal', valid);
                    return valid ? myValue : undefined;
                }

                ngModelCtrl.$parsers.push(validateEqual);
                ngModelCtrl.$formatters.push(validateEqual);

                scope.$watch(attrs.validateEquals, function () {
                    ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                });
            }
        };
    });