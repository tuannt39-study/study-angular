myapp.config(['$routeProvider', function($routeProvider) {
      $routeProvider
            .when('/themSV', {
                  templateUrl: 'themSV.html',
                  controller: 'themSVController'
            })
            .when('/quansatSV', {
                  templateUrl: 'quansatSV.html',
                  controller: 'quansatSVController'
            })
            .otherwise({
                  redirectTo: '/themSV'
            });
}]);

myapp.controller('themSVController', function($scope) {
      $scope.message = "Form thêm sinh viên";
});

myapp.controller('quansatSVController', function($scope) {
      $scope.message = "Bảng quan sát sinh viên";
});