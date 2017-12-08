myapp.controller('svController', function($scope){
    $scope.reset = function(){
        $scope.Ho = "Nguyễn Thế ";
        $scope.Ten = "Tuân";
        $scope.email = "tuannt@gmail.com";
    }   
    $scope.reset();
});