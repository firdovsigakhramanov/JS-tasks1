// ? javascript-loops

// ! Exercise-1
/*
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// 276 + 351 = 627
let cem1 = 0;
let cem2 = 0;

for (const i of arr_1) {
  cem1 = cem1 + i;
}

for (const i of arr_2) {
  cem2 = cem2 + i;
}
console.log(cem1 + cem2); 
*/

// ! Exercise-2

var n1 = 22;
for (var i = 1; i <= n1; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// ! Exercise-3
/*
 let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

 for (let i = arr.length; i>=0; i--) {
   console.log(arr[i]);
 }
 */

// ! Exercise-4
/*
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let arr = [];
for (let i = 0; i <= 2; i++) {
  arr[i] = arr_3[i] + arr_4[i];
}
console.log(arr);
 */
// ! Exercise-5

//  let str2 = "don't know why" ;
//  if(str2 = "y"){
//     console.log('yes');
//  }
//  else{
//     console.log('no');
// }

// ! Exercise-6
/*
 let hasil = 1;
 for (let i = 1; i <= 4; i++) {
    hasil = hasil*i;
 }
 */
// console.log(hasil);

// ! Exercise-7

/*
let str3 = "racecar";
let str4 = "Java";
let check = false;

for (let i = 0, k = str3.length - 1; i < str3.length, k >= 0; i++, k--) {
  if (str3[i] == str3[k]) {
    check = true;
  } else {
    check = false;
    break;
  }
}

if (check) {
  console.log("polidrome");
} else {
  console.log("Deyil");
}
*/

// ! Exercise-8

/* for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + "-FizzBuzz");
  } else if (i % 3 == 0 && i % 5 !== 0) {
    console.log(i + "-Fizz");
  } else if (i % 3 !== 0 && i % 5 == 0) {
    console.log(i + "-Buzz");
  }
} */

// ! Exercise-9

/* const thisIsAnArray = ["element1", "element2", "element3", "element4"];

for (i = 0; i <= 3; i++) {
  console.log(thisIsAnArray[i]);
} */

// ! Exercise-10

/* for (i = 10; i >= -20; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */

// const myStr = "FirstLine\n\t \SecondLine \nThirdLine"; // Change this line
// console.log(myStr);
