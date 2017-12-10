myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout){
    $scope.username = '';

    $scope.lowercaseUsername = function(){
        return $filter('lowercase')($scope.username);
    };
    
    $scope.len5 = 5;
    
    $scope.roles = [
        {roleName: 'Tài khoản phải có 5 ký tự'},
        {roleName: 'Tài khoản chưa được sử dụng'},
        {roleName: 'Tài khoản phải có ý nghĩa'}
    ];

    console.log($scope.roles);
}]);