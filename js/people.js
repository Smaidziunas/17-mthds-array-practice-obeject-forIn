"use strict";
console.log("people.js");

let people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
    id: "p_01",
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
    id: "p_02",
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    id: "p_03",
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
    id: "p_04",
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
    id: "p_05",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_06",
  },
];

// taikomes
const pplContainer = document.getElementById("people-container");

// darydami uzduotis nekeiciame orginalo iskyrus 8-9 uzduotis

// 1. atspausdinti visus vyrus
// people.forEach((pObj) => {
//   if (pObj.sex === "male") {
//     // console.log(pObj);
//   }
// });
//
// people
//   .filter((pObj) => pObj.sex === "male")
//   .forEach((pObj) => console.log("pObj", pObj));

// const males = people.filter((pObj) => pObj.sex === "male");
// console.log("males ===", males);

// 2. konsoleje atspausdinti visas moteris jaunesnes nei 35 metai
/* FILTER + FOREACH
people
  .filter((pCard) => pCard.sex === "female")
  .forEach((pCard) => {
    if (pCard.age < 35) console.log(pCard);
  });
*/

// 3. atrinkti i nauja masyva visus žmones kurie turi mašinas

/* Long version
const driversArr = people.filter((pObj) => pObj.hasCar === true);

console.log(
  "driversArr ===",
  driversArr.map(({ name }) => name)
*/

/* DESTRUCTURING FILTER
const driversArr = people.filter(({ hasCar }) => hasCar);

console.log(
  "driversArr ===",
  driversArr.map(({ name }) => name)
);
*/

/* Filter + MAP Destructuring
const newArr = people
  .filter((person) => person.hasCar === true)
  .map(({ name }) => name);
console.log("newArr ===", newArr);
*/

// 4. i nauja masyva atrinkti NEsusituokusiu zmoniu vardus
// filter => map
/*
const marriedNamesArr = people
  .filter(({ married }) => !married)
  .map(({ name }) => name);
console.log("marriedNamesArr ===", marriedNamesArr);
*/

// 5. i nauja masyva atrinkti vairuojanciu zmoniu lytis.
/* filter + MAP DESTRUCTURING
const driversGender = people
  .filter(({ hasCar }) => hasCar)
  .map(({ sex }) => sex);
console.log(driversGender);
*/

// 6. su funkcija grazinti objekta kuriame butu fairuojanciu vyru ir moteru kiekiai
// pvz {vyrai: 4, moterys: 3}

/* new Object in FUNCTION + FILTER destructoring
function getMalesFemales() {
  const rez = {
    vyrai: people.filter(({ sex }) => sex === "male").length,
    moterys: people.filter(({ sex }) => sex === "female").length,
  };
  return rez;
}
console.log("getMalesFemales() ===", getMalesFemales());
*/

// moterys: people.reduce(({ sex }) => sex === "female").length,

// 7. grazinti nauja masyva kuriame butu tik lytis ir pajamos. Tada suskaiciuoti vidurki pagal lyti.

/* //gender and income masyvas:

const genderIncome = people.map((element) => {
  element = {
    gender: element.sex,
    income: element.income,
  };
  return element;
});
*/

/* // vyru avg income masyvas
const malesAvgIncome =
  genderIncome
    .filter(({ gender }) => gender === "male")
    .reduce((total, { income }) => (total += income), 0) /
  genderIncome.filter(({ gender }) => gender === "male").length;

console.log("males ===", malesAvgIncome);
*/

/* // moteru avg income masyvas
const femalesAvgIncome =
  genderIncome
    .filter(({ gender }) => gender === "female")
    .reduce((total, { income }) => (total += income), 0) /
  genderIncome.filter(({ gender }) => gender === "female").length;

console.log("females ===", femalesAvgIncome);
*/

/* // funkcija pasirinkti gender ir gauti masyva vyru arba moteru avg;
function avgGender(arr, writeGender) {
  const filtered = arr.filter(({ gender }) => gender === writeGender);
  return (
    filtered.reduce((total, { income }) => (total += income), 0) /
    filtered.length
  );
}
console.log("avgGender ===", avgGender(genderIncome, "male"));
*/

// 8. grazinti nauja masyva pridedant prie kiekvieno objekto id savybe kuri bus didejanti nuo p_01
const peopleWithId = people.map((pObj, i) => {
  const localCopyPObj = { ...pObj };
  localCopyPObj.id = "p_" + (i + 1).toString().padStart(2, "0");
  return localCopyPObj;
});

// console.log("localCopyPObj ===", peopleWithId);

// console.log('peopleWithId ===', peopleWithId);
// 8.1 persikopijuoti kad orginalas butu su id reiksmem

// 9. sukurti funkcija kuri gaudama id istrina ta masyvo elementa. deletPerson(p_02)

function deletePerson(idName) {
  let newPeopleArr = people.filter(({ id }) => id !== idName); // su DESTRUCTURING
  // people.filter nepakeicia orginalo, todel reikia prilyginti orginalui atgal
  people = newPeopleArr;
  console.log(
    "afterdelete",
    people.map(({ name }) => name)
  );
  renderList(people, pplContainer);
}
// 10. parasyti funkcija kuri sukuria ir grazina viena zmogaus kortele tokiu pavidalu

`
<article class="card">
  <h3>Severija Piktutytė</h3>
  <h4>26 metu moteris</h4>
  <p>atlyginimas: 1300 eur</p>
  <p class=""><i class="fa fa-car" aria-hidden="true"></i></p>
</article>
`;

// jei vaiduorja masinos ikona zalia, jei ne raudona

//     name: "Jonas",
// surname: "Jonaitis",
// sex: "male",
// age: 26,
// income: 1200,
// married: false,
// hasCar: false,
// id: "p_01",

// APRASO PEOPLE ELEMENTA I DOM :

function makePerson({ name, surname, sex, age, income, hasCar, id }) {
  const articleEl = document.createElement("article");
  articleEl.className = "card";
  articleEl.dataset.pId = id;
  articleEl.innerHTML = `
  <h3>${name} ${surname}</h3>
  <h4>${age} metu ${sex === "male" ? "vyras" : "moteris"}</h4>
  <p>atlyginimas: ${income} eur</p>
  <p class="driver-icon ${
    hasCar ? "driver" : ""
  }"><i class="fa fa-car fa-3x" aria-hidden="true"></i></p>
  <button id="delete">delete</button>
  `;
  articleEl.querySelector("#delete").addEventListener("click", () => {
    deletePerson(id); //jeigu funkcija butu be argumento (id) tuomet nereiketu rasyti ()=>{};
  });
  // nusitaikyti ir uzdeti event listeneri mygtukui
  return articleEl;
}

// console.log('makePerson(people[0]) ===', makePerson(people[0]));
// 11. sukurti funkcija renderList(data) kuri is dataArr sugeneruoja elementus su 10pratimo funkcija ir patalpina juos i `<div id="people-container" class="people-container">

// NUPIESIA APRASYTA DOM ELEMENTA I HTML:
function renderList(arr, dest) {
  //
  const htmlElsFromArr = arr.map(makePerson);
  console.log("htmlElsFromArr ===", htmlElsFromArr);
  dest.innerHTML = "";
  htmlElsFromArr.forEach((el) => dest.append(el));
  // [el, el, el] => ...htmlElsFromArr => el, el, el
  dest.append(...htmlElsFromArr);
}
renderList(people, pplContainer);

// 12. su 11to pratimo funkcija rikiuojam ir atrenkam elementus i sarasa mygtuku paspaudimais.

const fieldsetEl = document.querySelector("fieldset");
const maleBtnEl = fieldsetEl.firstElementChild.nextElementSibling;
maleBtnEl.setAttribute("id", "show-males");

maleBtnEl.addEventListener("click", () => {
  people = people.filter(({ sex }) => sex === "male");

  renderList(people, pplContainer);
});

// `
//   <button>Rodyti tik vyrus</button>
//   <button>Rodyti tik moteris</button>
//   <button>isrikiuoti pagal pajamas</button>
//   <button>isrikiuoti pagal amziu</button>
// `;
