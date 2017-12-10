myApp.controller('mainController', function($scope, $log, $filter, $resource){
    console.log($scope);
    console.log($log);

    $log.log('Hello nhé');
    $log.info('Thông báo');
    $log.warn('Cảnh báo');
    $log.debug('Thông tin chi tiết');
    $log.error('Báo lỗi');

    $scope.name = 'Tuân';
    $scope.uppercaseName = $filter('uppercase')($scope.name);
    $log.info($scope.name);
    $log.info($scope.uppercaseName);

    console.log($resource)
});