myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout){
    $scope.alertClick = function(){
        alert('Click !');
    };
    $scope.name = 'Tuân';
}]);