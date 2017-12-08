myapp.controller('tinhController', function($scope, tinhService, gtmacdinh){
    $scope.number = gtmacdinh;
    $scope.ketqua = tinhService.binhphuong($scope.number);
    $scope.binhphuong = function(){
        $scope.ketqua = tinhService.binhphuong($scope.number);
    }
});