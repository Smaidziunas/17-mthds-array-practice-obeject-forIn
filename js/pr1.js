"use strict";
console.log("pr1.js");

const numbers = [
  1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45,
];

const nums2 = [2, 5, -10, "one", true, 3, "two", 10];
const nums3 = [true, true, true, true, true, true, true, false];
// 1. numbers masyvo atrinkti ir grazinti tik sveikuosius skaicius
/* FILTER
const sveikiEl = numbers.filter((nb) => Number.isInteger(nb) === true);
console.log("sveikiEl ===", sveikiEl);
*/

// 2. susumuoti visa numbers masyva.
/* REDUCE
const totalSum = numbers.reduce((total, nb) => {
  return total + nb;
}, 0);
console.log("totalSum ===", totalSum);
*/

// 3. Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 1}
//   {index: 1, reiksme: 2}
//    ...
// ]
/*  MAP
const numbers2 = numbers.map((nb, idx) => ({ index: idx, reiksme: nb }));
console.log("numbers2 ===", numbers2);
*/

// 4. grazinti nauja masyva su Suapvalintom reikšmem iki sveikų skaičių
/* MAP
const numbers3 = numbers.map((nb) => parseInt(nb));
console.log("numbers3 ===", numbers3);
*/

// 5. isrikiuoti numbers masyva nuo didziausio iki maziausio
/* SORT
const numbersSrt = numbers.sort(function (a, b) {
  return b - a;
});
console.log("numbersSrt ===", numbersSrt);
*/

// 6. is nums2 masyvo atrinkti tik skaiciu masyva ir grazinti jo vidurki

/* REDUCE    / nums2.filter((nb) => typeof nb === "number").length
const nbAvg = nums2
  .filter((nb) => typeof nb === "number")
  .reduce((total, nb, i, arr) => total + nb / arr.length, 0);
console.log("nbAvg ===", nbAvg);
*/

/* forEach
const numsOnly = nums2.filter((nb) => typeof nb === "number");

let total = 0;

numsOnly.forEach((sk) => {
  total += sk;
});

const avg = total / numsOnly.length;

console.log("avg ===", avg);
*/

// 7. patiktinti ar nums2 masyve yra elementu kurie butu ne skaiciaus ir ne string tipo.
// typeof item === "number" || typeof item === "string"

/* function+forEach
function isNbOrStr(array) {
  let array2 = "";
  array.forEach((element) => {
    if (!(typeof element === "number" || typeof element === "string"))
      array2 = "yra";
  });
  return array2;
}
const test = isNbOrStr(nums2);
console.log("test ===", test);
*/

/*SOME
const arr2 = nums2.some(
  (el) => !(typeof el === "number" || typeof el === "string")
);
console.log("arr2 ===", arr2);
*/
