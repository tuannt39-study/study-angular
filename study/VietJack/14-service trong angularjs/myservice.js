myapp.factory('toanService', function() {     
    var factory = {};  
    factory.phepnhan = function(a, b) {
       return a * b 
    }
    return factory;
 });

myapp.service('tinhBPService', function(toanService){
    this.binhphuong = function(a) { 
    return toanService.phepnhan(a,a); 
 }
});