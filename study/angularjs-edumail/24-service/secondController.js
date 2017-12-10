myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){
    $scope.num = $routeParams.num || 1;
    $scope.name = nameService.name;
    $log.log(nameService.name);
    $log.log(nameService.nameLength());

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    })
}]);