myApp.service('nameService', function(){
    var self = this;
    this.name = "Nguyễn Tuân";
    this.nameLength = function(){
        return self.name.length;
    }
});