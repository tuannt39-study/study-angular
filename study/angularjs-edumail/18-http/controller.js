myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
    $scope.username = '';

    $scope.lowercaseUsername = function(){
        return $filter('lowercase')($scope.username);
    };
    
    $scope.len5 = 5;

    var url = 'data.json';
    $http.get(url)
        .success(function(result){
            $scope.roles = result;
            console.log(result);
        })
        .error(function(data, status){
            console.log(data);
            console.log(status);
        });
    
}]);