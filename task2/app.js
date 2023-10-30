// ? JavaScript Conditional Statements:

// ! Exercise-1

/*let i = prompt("deyisen daxil edin");

if (i % 2 == 0) {
  console.log("even");
} 
else {
  console.log("odd");
}*/

// ! Exercise-2

/*
let a=prompt("a deyisenini daxil");
let b=prompt("b deyisenini daxil");

if(a>b){
  console.log("a b den boyukdur");
}

else if(b>a){
  console.log(" b a dan boyukdur");
}

else if(b==a){
  console.log(" b a ya beraberdir");
}
*/

// ! Exercise-3

/*
let a = prompt("a deyisenini daxil");
let b = prompt("b deyisenini daxil");
let c = prompt("c deyisenini daxil");

if( a>b && b>c){
  console.log("a>b>c");
}

else if( b<a && a>c){
  console.log("b>a>c");
}

else if( c>a && a>b){
  console.log("c>a>b");
}

else if( c>a && b>a){
  console.log("c>b>a");
}

else if( a>c && c>b){
  console.log("a>c>b");
}

else if( b>c && c>a){
  console.log("b>c>a");
}
*/

// ! Exercise-4
// let month = prompt("Ayi daxil edin");
// if (month < 13 && month > 0) {
//   if (month == 2) {
//     let year = prompt("il uzun ildirse U qisadirsa Q yazin");
//     if (year == "U") {
//       console.log("29 gun");
//     } else if (year == "Q") {
//       console.log("28 gun");
//     }
//   }
//   else if( month == 4 || month ==6 || month ==9 || month ==11){
//     console.log("30 gun");
//   }
//   else{
//     console.log("31 gun");
//   }
// }
// else{
//   console.log("ele bir ay yoxdur");
// }
// ! Exercise-5
/*
let point = prompt("Imtahan balnizi daxil edin");
if (100 >= point && point >= 90) {
  console.log("S");
} else if (90 >= point && point >= 80) {
  console.log("A");
} else if (80 >= point && point >= 70) {
  console.log("B");
} else if (70 >= point && point >= 60) {
  console.log("C");
} else if (60 >= point && point >= 50) {
  console.log("D");
} else if (50 >= point && point >= 40) {
  console.log("E");
} else if (40 >= point) {
  console.log("Failed");
} else {
  console.log("Invalid marks");
}
*/
// ! Exercise-6

let year = prompt("ili daxil edin");
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log(year + " is leap year");
} else {
  console.log(year + " is not a leap year");
}

// ! Exercise-7

// let num1 = prompt("num1 ni daxil edin");
// let num2 = prompt("num2 ni daxil edin");
// let op = prompt("operatoru daxil edin");
// if (op == "+") {
//   console.log(parseInt(num1) + parseInt(num2));
// } else if (op == "*") {
//   console.log(num1 * num2);
// } else if (op == "%") {
//   console.log(num1 % num2);
// } else if (op == "-") {
//   console.log(num1 - num2);
// } else if (op == "/") {
//   console.log(num1 + num2);
// } else {
//   console.log("Invalid operation");
// }

// ! Exercise-8
/*
let a = prompt("a-nı daxil edin");
let b = prompt("b-ni daxil edin");
let c = prompt("c-ni daxil edin");
if (a == b && b == c) {
  console.log("beraberterfli");
} else if (a == b && b !== c) {
  console.log("beraberyanli");
} else if (c == b && b !== a) {
  console.log("beraberyanli");
} else if (c == a && a !== b) {
  console.log("beraberyanli");
} else if (a !== b || a !== c || b !== c) {
  console.log("muxtelifterefli");
}
*/
