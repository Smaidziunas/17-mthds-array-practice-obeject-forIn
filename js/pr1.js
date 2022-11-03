"use strict";
console.log("pr1.js");

const numbers = [
  1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45,
];

const nums2 = [2, 5, -10, "one", true, 7, "two", 1];

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
