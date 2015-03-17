/**
 * http://stackoverflow.com/questions/21712147/differences-among-in-angular-directive-scope
 */

var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
    $scope.status = 'Ready.';
    $scope.a = 1;
    $scope.b = 2;
    $scope.bar = 'This is bar.';

    $scope.update = function (parm1, parm2) {
        $scope.status = parm1 + ": " + parm2;
    };
});
app.directive("myDirective", function () {
    return {
        restrict: 'E',
        scope: {
            foo: '=',
            literal: '@',
            literalBehavior: '@behavior',
            behavior: '&',
            call: '&'
        },
        template:
            '<div>Inner bar: {{foo}}</div>' +
            '<div>Inner literal: {{literal}}</div>' +
            '<div>Literal Behavior: {{literalBehavior}}</div>' +
            '<div>Result of behavior(): {{result}}</div>',
        link: function (scope) {
            scope.foo = scope.foo + " (modified by directive).";
            scope.result = scope.behavior();
            scope.call({val: 99});
        }
    };
});
