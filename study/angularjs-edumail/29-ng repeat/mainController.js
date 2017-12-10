myApp.controller('mainController', ['$scope', function($scope){
    $scope.people = [
        {
            name: 'Tuân',
            address: 'Hà Nội',
            country: 'Việt Nam'
        },{
            name: 'Tuân 2',
            address: 'Hà Nội',
            country: 'Việt Nam'
        },{
            name: 'Tuân 3',
            address: 'Hà Nội',
            country: 'Việt Nam'
        }
    ]

    $scope.formattedAddress = function(person){
        return person.name + ' - ' + person.address + ' - ' + person.country;
    };
}]);