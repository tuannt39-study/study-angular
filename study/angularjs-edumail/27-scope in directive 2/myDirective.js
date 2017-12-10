myApp.directive('searchResult', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directive/searchResult.html',
        replace: true,
        scope: {
            personObject: '='
        }
    }
});