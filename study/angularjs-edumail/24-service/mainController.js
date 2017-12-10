myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){
    $scope.name = nameService.name;
    $log.log(nameService.name);
    $log.log(nameService.nameLength());

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    })
}]);