myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){
    $scope.name = 'Nguyễn Tuân';
    $timeout(function(){
        $scope.name = 'Boy';
    }, 3000);
}]);