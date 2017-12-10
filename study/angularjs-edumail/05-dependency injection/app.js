// var Person = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var logPerson = function(){
//     var hoa = new Person('Hoa', 'Le');
//     console.log(hoa);
// }

// logPerson();

var Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var logPerson = function(person){
    console.log(person);
}

var hoa = new Person('Hoa', 'Le');

logPerson(hoa);
