myApp.controller('mainController', ['$scope', '$log', function(a, b){
    // $log.info($scope);
    console.log(a);
}]);

// minify
// myApp.controller("mainController",function(n,o){o.info(n)});
// myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);
