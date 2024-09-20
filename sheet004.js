// trim



let firstName = '     ashish    ';
console.log(firstName);
console.log(firstName.length);
firstName.trim();
const newString = firstName.trim();
console.log(newString);
console.log(newString.length);


// toUppercase

console.log(newString.toUpperCase());

// toLowercase

console.log(newString.toLowerCase());


//to get the value by using slice trough the index

let anotherString = firstName.slice(6,10);
console.log(anotherString);