myApp.directive('searchResult', function(){
    return {
        restrict: 'AECM',
        template: '<a href="#" class="list-group-item"> <h3 class="list-group-item-heading">Nguyễn Tuân</h3></a>',
        replace: true
    }
});