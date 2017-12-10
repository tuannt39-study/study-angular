myApp.controller('mainController', function($scope){
    console.log($scope);
});

var searchPerson = function(firstName, $scope, email, city, job){
    return 'Thông tin của bạn';
};

console.log(angular.injector().annotate(searchPerson));