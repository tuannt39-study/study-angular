myapp.controller('tinhController', function($scope, tinhBPService){
    $scope.binhphuong = function() {
        $scope.ketqua = tinhBPService.binhphuong($scope.number);
    }
});