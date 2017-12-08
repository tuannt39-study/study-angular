myapp.directive('sinhvien', function(){
    var directive = {};
    directive.restrict = 'E';
    directive.template = 'Sinh viên: <b>{{sinhvien.ten}}</b> - MSSV: <b>{{sinhvien.mssv}}</b>';
    directive.scope = {
        sinhvien: '=ten'
    };
    directive.compile = function(element, attributes){
        element.css("border", "1px solid #cccccc");
        var hamLienKet = function($scope, element, attributes) {
            element.html("Sinh viên: <b>"+$scope.sinhvien.ten +"</b> <br/> MSSV: <b>"+$scope.sinhvien.mssv+"</b><br/>");
            element.css("background-color", "#DEB887");
        }
        return hamLienKet;
    };
    return directive;
})