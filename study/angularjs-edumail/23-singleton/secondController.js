myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams){
    $scope.num = $routeParams.num || 1;
    $log.second = 'Variable from second';
    $log.info($scope);
}]);