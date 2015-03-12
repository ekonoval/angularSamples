var app = angular.module('myApp', []);

app.controller('MainCtrl', function ($scope) {
    // This method is here so that we can display the full JSON of the passed in object
    // The built in json filter removes anythign starting with a $ so you don't get to see the
    // $dirty, $pristine, etc flags
    $scope.toJSON = function (obj) {
        return JSON.stringify(obj, null, 2);
    };

    // Initialize the user info (this would come from the server)
    $scope.user = {
        email: 'jo@bloggs.com',
        firstName: 'Jo',
        lastName: 'Bloggs',
        websites: {
            url: 'www.bloggs.com'
        },
        description: 'Jo is a real team worker',
        password: 'xxx',
        admin: true
    };
    $scope.passwordRepeat = $scope.user.password;

    // Make a copy of the user
    var original = angular.copy($scope.user);

    // Revert the user info back to the original
    $scope.revert = function () {
        $scope.user = angular.copy(original);
        $scope.passwordRepeat = $scope.user.password;
        $scope.userInfoForm.$setPristine();   // Requires >= v1.1.1
    };

    $scope.canRevert = function () {
        return !angular.equals($scope.user, original);
    };

    $scope.canSave = function () {
        return $scope.userInfoForm.$valid && !angular.equals($scope.user, original);
    };

var obj1 = {
  key1: "value1",
  key2: "value2",
  key3: {a: "aa", b: "bb"}
};

var obj2 = {
  key2: "value2",
  key1: "value1",
  key3: {a: "aa", b: "bb"}
};

var obj3 = {
  key1: "value1",
  key2: "value2",
  key3: {a: "aa", b: "bb"}
};

    console.log(obj1 == obj2);
    console.log(obj1 == obj3);
    console.log(angular.equals(obj1, obj2), angular.equals(obj1, obj3));

});
