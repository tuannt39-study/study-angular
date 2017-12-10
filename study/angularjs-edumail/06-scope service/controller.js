myApp.controller('mainController', function($scope){
    $scope.name = 'Tuân';
    $scope.job = 'Admin';
    $scope.getInfo = function(){
        return ' Tuân - Admin';
    }
    $scope.getInfo();
    console.log($scope);
    console.log($scope.getInfo());
});