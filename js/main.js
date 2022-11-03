"use strict";
console.log("main.js");

const numbers = [
  1,
  2,
  3,
  5.3,
  8,
  "-8",
  -5.5,
  -6,
  -16,
  -5,
  -9,
  4.2,
  5,
  12,
  -6,
  45,
];

// 1. atrinkti skaicius didesnius uz 3 => filter;

const fileteredNums = numbers.filter((nb) => nb > 3);
// console.log("fileteredNums ===", fileteredNums);

// 1.1 parasyti funkcija kuri priima skaiciu uz kuri didesnes reiksmes norim grazinti is arg gauto masyvo

/* function expression:
const moreThan = (limit, arr) => arr.filter((nb) => nb > limit);
*/

/* arrow function
function moreThan(limit, arr) {
  return (filtered = arr.filter((nb) => nb > limit));
}
*/

// console.log(moreThan(2, numbers));

// 2. grazinti nauja masyva su padvigubintom reiksmem => map;
/*
const doubles = numbers.map((sk) => sk * 2);
*/
// console.log("doubles ===", doubles);

// 3. gauti neigiamu reiksmiu bendra suma => reduce;
/* FILTER and REDUCE
const negativeTotal = numbers
  .filter((nb) => nb < 0)
  .reduce((total, nb) => total + nb, 0);
console.log("negativeTotal ===", negativeTotal);
*/

// 4. suzinoti ar yra skaicius 5 musu numbers masyve? => includes;
/* includes()
const nb5 = numbers.includes(5);
console.log("nb5 ===", nb5);
*/

// 5. konsoleje atspausdinti visas reiksmes su indeksais => forEach;
/*
numbers.forEach((nb, i) => console.log(`index ${i}, reiksme ${nb}`));
*/

// 6. every - patikrinti argrazina true jei vidine fuknkcija visais atvejais grazina True;

//ar visi el numbers masyve yra skaiciai;
/*
const allNums = numbers.every((sk) => typeof sk === "number");
console.log("allNums ===", allNums);
*/

// ar visi el numbers masyve yra teigiami;
/* EVERY grazina TRUE ar FALSE
const isPos = numbers.every((sk) => sk > 0);
console.log("isPos ===", isPos);
*/

/* FILTER GRAZINA MASYVA su REIKSMEMIS
const isPos2 = numbers.filter((sk) => sk > 0);
console.log("isPos2 ===", isPos2);
*/

// 7. some - ar nors vienas elementas atitinka salyga?
// ar yra nors vienas string tipo el musu masyve?
/* SOME
const isThereAString = numbers.some((sk) => typeof sk === "string");
console.log("isThereAString ===", isThereAString);
*/
