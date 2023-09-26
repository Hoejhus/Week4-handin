
//Add
function add(n1,n2) {
    return n1 + n2;
};

//Subtract
const sub = function(n1,n2){
    return n1-n2
};

//Callback Example
//const cb = function(n1,n2, callback){
//    return "Result from the two numbers: "+n1+n2+"="+callback(n1,n2);
//};

//Multiple
function mul(n1,n2){
    return n1 * n2
}

console.log(add(1,2));      // 3
console.log(add);           // "[Function: add]"
console.log(add(1,2,3));    // 3
console.log(add(1));        // "NaN"
console.log(mul(2,2))       // 4
// console.log(cb(3,3,add));   // "Result from the two numbers: 33=6"
// console.log(cb(4,3,sub));   // "Result from the two numbers: 43=1"
// console.log(cb(3,3,add())); // CB Error
// console.log(cb(3,"hh",add));// CB Error


const names = ["Lars", "Peter", "Jan", "Ian", "Michael", "Kimmie", "Mady", "Mads", "Magnus", "Emil", "William"]

filteredNames = names.filter(name => name.length === 3)

filteredNames.forEach(name => {
    console.log(name)
});

uppercasedNames = names.map(name => name.toUpperCase());
uppercasedNames.forEach(name => {
    console.log(name)
});