myApp.controller('mainController', ['$scope', '$log', function($scope, $log){
    $scope.name = 'Main';
    $log.main = 'Variable from main';
    $log.info($scope);
}]);