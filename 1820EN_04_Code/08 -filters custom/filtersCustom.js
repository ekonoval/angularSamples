angular.module('filtersCustom', [])

    .controller('FiltersCustomCtrl', function ($scope) {

        //model
        $scope.backlog = [
            {name: 'Submit proposal', desc: 'Submit book proposal to PACKT', priority: 1, estimation: 1, done: true},
            {
                name: 'Prepare outline',
                desc: 'Prepare book outline with estimated page count',
                priority: 2,
                estimation: 2,
                done: true
            },
            {name: 'Prepare samples', desc: 'Think of code samples', priority: 3, estimation: 5, done: true},
            {name: 'Write 1st draft', desc: 'Write 1st draft of the text', priority: 3, estimation: 12, done: false},
            {name: 'Review draft', desc: 'Re-read and review the 1st draft', priority: 4, estimation: 5, done: false},
            {
                name: 'Incorporate reviewers remarks',
                desc: 'Go over and reviewers remarks ',
                priority: 6,
                estimation: 3,
                done: false
            },
            {
                name: 'Promote in social media',
                desc: 'Promote book in social media!',
                priority: 10,
                estimation: 1,
                done: false
            }
        ];

        $scope.criteriaTxt = '';
        $scope.sortField = null;
        $scope.isSortReveresed = false;

        $scope.addRandomBacklogItem = function () {
            $scope.backlog.push({name: 'Write 1st draft - '+Math.random(), desc: 'Write 1st draft of the text', priority: 3, estimation: 12, done: false});
        };

        //#------------------- sort -------------------#//
        $scope.sort = function (fieldName) {
            if ($scope.sortField === fieldName) {
                $scope.isSortReveresed = !$scope.isSortReveresed;
            } else {
                $scope.sortField = fieldName;
                $scope.isSortReveresed = false;
            }
        };

        $scope.isSortUp = function (fieldName) {
            return $scope.sortField == fieldName && !$scope.isSortReveresed;
        };

        $scope.isSortDown = function (fieldName) {
            return $scope.sortField == fieldName && $scope.isSortReveresed;
        };

        //#------------------- custom filtering func -------------------#//
        $scope.customFilteringFunc = function (item, p2) {
            return (item.priority >= 9);
        };


    });
