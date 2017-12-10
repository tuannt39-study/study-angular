var types = [1, '2', 3, function(){
    console.log('AAA');
    alert('Hello');
}];
console.log(types);
types[3]();