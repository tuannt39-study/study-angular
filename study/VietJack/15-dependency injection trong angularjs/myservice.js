myapp.config(function($provide){
    $provide.provider('toanService', function(){
        this.$get = function(){
            var factory = {};
            factory.phepnhan = function(a, b){
                return a * b;
            }
            return factory;
        };
    });
});

myapp.value('gtmacdinh', 5);

myapp.factory('toanService', function(){
    var factory = {};
    factory.phepnhan = function(a, b){
        return a * b;
    }
    return factory;
});

myapp.service('tinhService', function(toanService){
    this.binhphuong = function(a){
        return toanService.phepnhan(a, a);
    }
});
