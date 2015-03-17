describe('custom pagination directive by Sunsey', function () {
    var $scope, element, lis;

    beforeEach(module('custom-pag'));

    beforeEach(inject(function ($compile, $rootScope) {
        $scope = $rootScope;
        $scope.numPages = 5;
        $scope.currentPage = 3;

        element = $compile('<custom_pagination ' +
        'num-pages="numPages" current-page="currentPage" ' +
        'on-select-page="selectPageHandler(page)"' +
        '></custom_pagination>')($scope);

        $scope.$digest();

        lis = function () {
            return element.find('li');
        };

        //console.log('beforeeach');
    }));

    it('has a "pagination" css class', function () {
        expect(element.hasClass('pagination')).toBe(true);
    });

    it('contains one ul and num-pages + 2 li elements', function () {
        expect(element.find('ul').size()).toBe(1);

        expect(element.find('ul li').size()).toBe(7);

        expect(lis().eq(0).find('a').text()).toBe('Previous');
        expect(lis().eq(-1).find('a').text()).toBe('Next');
    });

    it('disables the "next" link if current-page is num-pages', function () {
        $scope.currentPage = 5;
        $scope.$digest();
        //console.log($scope);

        expect(lis().eq(-1).hasClass('disabled')).toBe(true);
    });

    it('changes currentPage if a page link is clicked', function () {
        var page2 = lis().eq(2).find('a');
        //var page2 = lis().eq(2);
        page2.click();
        $scope.$digest();

        expect(page2.parent('li').hasClass('active')).toBe(true);

        expect($scope.currentPage == 2).toBe(true);
    });

    it('executes the onSelectPage expression when the current page changes', function () {
        $scope.selectPageHandler = jasmine.createSpy('selectPageHandler');
        $scope.$digest();

        var page2 = lis().eq(2).find('a').eq(0);
        page2.click();
        $scope.$digest();
        expect($scope.selectPageHandler).toHaveBeenCalledWith(2);
    });
});