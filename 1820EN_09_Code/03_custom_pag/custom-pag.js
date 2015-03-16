angular.module('custom-pag', [])
.directive('custom_pagination', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template:
            '<div class="pagination"><ul>' +
                '<li ng-class="{disabled: noPrevious()}"><a ng-click="selectPrevious()">Previous</a></li>' +
                '<li ng-repeat="page in pages" ng-class="{active: isActive(page)}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
                '<li ng-class="{disabled: noNext()}"><a ng-click="selectNext()">Next</a></li>' +
            '</ul></div>',
        link: function (scope) {

        }
    };
});