// clone the arrays
// concatinate two arrays


let array1 =["items1", "items2"];
let array2 = array1;
console.log(array1, array2);

// another way

let array3 = ["items4" , "items4"];
let array4 = array3.slice(0);
console.log(array3,array4);
array4.push =("another");
console.log(array3,array4);



let array6 = ["item4", "item5", "items6"]
let array7 = [...array6];
console.log(array6,array7);



let array9 = ["item8","item0"]
let array10 = array9.slice(0).concat(["ashish","ashishj"]);
console.log(array9,array10);