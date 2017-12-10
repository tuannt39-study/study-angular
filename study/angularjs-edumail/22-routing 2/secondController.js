myApp.controller('secondController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.num = $routeParams.num || 1;
}]);