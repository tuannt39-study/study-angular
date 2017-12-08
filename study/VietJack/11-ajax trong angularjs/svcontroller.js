myapp.controller('svController', function($scope, $http){
    var url = 'dulieusv.json';
    $http.get(url).success(function(response){
        $scope.svk70 = response;
    })
});