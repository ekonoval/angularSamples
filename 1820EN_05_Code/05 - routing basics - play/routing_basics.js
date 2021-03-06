/**
 * Routing basics play
 */
angular.module('routing_basics', [])

    .config(function ($routeProvider) {

        $routeProvider
            .when('/admin/users/list', {templateUrl: 'tpls/users/list.html'})
            .when('/admin/users/new', {templateUrl: 'tpls/users/new.html'})
            .when('/admin/users/edit/:id', {templateUrl: 'tpls/users/edit.html'})
            .when('/admin/users/edit', {templateUrl: 'tpls/users/edit.html'})

            .otherwise({redirectTo: '/admin/users/list'});
    })

    .factory('Users', function () {

        var users = [
            {id: 1, name: 'Pawel'},
            {id: 2, name: 'Peter'}
        ];

        return {
            query: function () {
                return users;
            },
            add: function (user) {
                return users.push(user);
            },
            get: function (id) {
                console.log(id, users);
                return users[id];
            },
            update: function (id, user) {
                users[id] = user;
            }
        };
    })

    .controller('NavigationCtrl', function ($scope, $location) {
    })

    .controller('ListUsersCtrl', function ($scope, Users) {
        $scope.users = Users.query();
    })

    .controller('NewUserCtrl', function ($scope, Users) {
    })

    .controller('EditUserCtrl', function ($scope, $routeParams, Users) {
        console.log($routeParams);
        //$scope.user = Users.get({id: $routeParams.id});
        $scope.user = Users.get($routeParams.id);
    });
