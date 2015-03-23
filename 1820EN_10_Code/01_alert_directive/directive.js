angular.module("alert-directive", [])

.directive('alert', function () {
  return {
    restrict:'EA',
    replace: true,
    template:
    '<div class="alert alert-{{type || \'info\'}}">' +
      '<button type="button" class="close" ng-click="close()">&times;</button>' +
      '<div>innerType: {{type}}</div>' +
      '<div ng-transclude>innerT {{type}}<br/></div>' +
    '</div>',
    transclude:true,
    scope:{
      type:'=',
      close:'&'
    }
  };
});
