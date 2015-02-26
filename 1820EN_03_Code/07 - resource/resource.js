angular.module('resource', ['ngResource'])
    .factory('Users', function ($resource) {
        var Users = $resource('https://api.mongolab.com/api/1/databases/ascrum/collections/users/:id', {
            apiKey: '4fb51e55e4b02e56a67b0b66',
            id: '@_id.$oid'
        });

        Users.prototype.getFullName = function () {
            //return this.firstName + ' ' + this.lastName;
            //return this.name + ' ' + Math.random();
            return this.name + ' fake';
        };

        return Users;
    })
    .controller('ResourceCtrl', function ($scope, Users) {

        $scope.users = Users.query({}, function (users) {
            console.log($scope.users.length);
        });

        $scope.remove = function (user, index) {
            console.log(user);
            Users
            //Users['delete']({}, user);
            //Users['delete']({}, user);
            //user.$delete();
            $scope.users.splice(index, 1);
        };

        $scope.add1 = function () {
            var user = new Users({
                name: 'Superhero' ,
                lastName: 'Last1',
                firstName: 'First1'
            });
            user.$save();
            console.log('add1');
        };

        $scope.add2 = function () {
            var user = {
                name: 'Superhero',
                lastName: 'Last2',
                firstName: 'First2'
            };
            Users.save(user);
            console.log('add2');
        };

    });
