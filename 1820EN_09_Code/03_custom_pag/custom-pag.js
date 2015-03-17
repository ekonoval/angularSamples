angular.module('custom-pag', [])
    .controller('customPagCtrl', function ($scope) {
        $scope.cbHandler = function (page) {
            console.log('cbHandler in customPagCtrl: ', page);
        }
    })
    .directive('customPagination', function () {

        return {
            restrict: 'E',
            replace: true,
            scope: {
                inP: '@',
                //numPages: '=numPages'
                numPagesInner: '=numPages',
                currentPage: '=',
                onSelectPage: '&'
            },
            template: '<div class="pagination">' +
            '<ul>' +
            '<li ng-class="{disabled: noPrevious()}"><a ng-click="selectPrevious()">Previous</a></li>' +
            '<li ng-repeat="page in pages" ng-class="{active: isActive(page)}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
            '<li ng-class="{disabled: noNext()}"><a ng-click="selectNext()">Next</a></li>' +
            '</ul>' +
            '<div style="margin: 5px;">interpolating "{{inP}}"</div>' +
            '</div>',
            link: function (scope) {
                scope.$watch('numPagesInner', function (value) {
                    scope.pages = [];
                    for (var i = 1; i <= value; i++) {
                        scope.pages.push(i);
                    }

                    if (scope.currentPage > value) {
                        scope.currentPage = value;
                    }
                });

                scope.cbHandler = function (page) {
                    alert("xxxxx");
                };

                scope.selectPage = function (page) {
                    scope.currentPage = page;

                    scope.onSelectPage({page: page});
                };

                scope.isActive = function (page) {
                    return scope.currentPage == page;
                };

                scope.selectPrevious = function () {
                    if (scope.currentPage > 1) {
                        scope.currentPage--;
                        scope.selectPage(scope.currentPage);
                    }
                };

                scope.selectNext = function () {
                    if (scope.currentPage < scope.pages.length) {
                        scope.currentPage++;
                        scope.selectPage(scope.currentPage);
                    }
                };
            }
        };
    });