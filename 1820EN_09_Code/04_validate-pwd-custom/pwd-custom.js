angular.module('directives.pwd-custom', [])
    .controller('PwdCustomCtrl', function ($scope) {
        $scope.bothPwdMatch = function () {
            return $scope.passwordForm.$dirty && $scope.passwordForm.$valid;
        };
    })
    .directive('validateEquals', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                //console.log(ngModelCtrl);

                function checkValidateEquals(value) {
                    var valid = (value === scope.$eval(attrs.validateEquals));
                    ngModelCtrl.$setValidity('equal', valid);

                    return valid ? value : undefined;
                }

                ngModelCtrl.$parsers.push(checkValidateEquals);
                ngModelCtrl.$formatters.push(checkValidateEquals);

                scope.$watch(attrs.validateEquals, function () {
                    ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                });
            }
        };
    });