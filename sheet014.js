// nested if else

let actualValue = +prompt('what is your phone temprature');


if(actualValue >= 40 ){
    console.log("TURN ON AC");
    
}else if(actualValue >=30){
    console.log("it is hot outside");
}else if(actualValue >= 25){
    console.log("it is normal tempreture");
}else if(actualValue >= 10){
    console.log ('it is cold outside');
}
else{
    console.log('aag jlao !!!!');
}