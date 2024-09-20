// undefined 
let firstName;
console.log(typeof firstName);

var Name;
console.log(typeof Name);


// we can define let and var later but we have to define constant at the time of declaration

// null

let lastName = 'null'
console.log(typeof lastName);

console.log(typeof null);
// if we will go to find the datatype of null it will give "object" and it is a bug in javascript



// BigInt

// console.log(Number.MAX_SAFE_INTEGER);
//we can only give value till  9007199254740991 beyond that we have to use big int

let Number = 22222222546787654567845678n;
console.log(Number);
let sameNumber = BigInt(1234567898765432345678765);
console.log(sameNumber);
 


