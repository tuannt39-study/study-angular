myApp.directive('searchResult', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directive/searchResult.html',
        replace: true,
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        },
        compile: function(elem, attrs){
            console.log('Compiling...');
            console.log(elem.html());
            return {
                // pre: function(scope, elements, attrs){
                //     console.log('Pre-linking...');
                //     console.log(elements);
                // },
                // post: function(scope, elements, attrs){
                //     console.log('Post-linking...');
                //     console.log(elements);
                // }
                post: function(scope, elements, attrs){
                    console.log('Post-linking...');
                    console.log(scope);
                    if(scope.personObject.name == 'Tuân 2'){
                        elements.removeAttr('class');
                    }
                    console.log(elements);
                }
            }
        }
    }
});