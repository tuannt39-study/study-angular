myApp.directive('searchResult', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directive/searchResult.html',
        replace: true,
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        },
        link: function(scope, elements, attrs){
            console.log('Linking...');
            console.log(scope);
            if(scope.personObject.name == 'Tuân 2'){
                elements.removeAttr('class');
            }
            console.log(elements);
        }
    }
});