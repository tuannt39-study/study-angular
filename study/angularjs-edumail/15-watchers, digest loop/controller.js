myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout){
    $scope.username = '';

    $scope.lowercaseUsername = function(){
        return $filter('lowercase')($scope.username);
    };

    $scope.$watch('username', function(oldValue, newValue){
        console.log('Changed !!');
        console.log('New: ' + newValue);
        console.log('Old: ' + oldValue);
    });

    // setTimeout(function(){
    //     $scope.$apply(function(){
    //         $scope.username = 'tuanNT';
    //         console.log('Scope changed !');
    //     });
    //     // $scope.username = 'tuanNT';
    //     // console.log('Scope changed !');
    // }, 3000);

    $timeout(function(){
        $scope.username = 'tuanNT';
        console.log('Scope changed !');
    }, 3000);

}]);