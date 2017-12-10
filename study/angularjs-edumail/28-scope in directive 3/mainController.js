myApp.controller('mainController', ['$scope', function($scope){
    $scope.person = {
        name: 'Tuân',
        address: 'Hà Nội',
        country: 'Việt Nam'
    }

    $scope.formattedAddress = function(person){
        return person.name + ' - ' + person.address + ' - ' + person.country;
    };
}]);