const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Perez, Alex', 'Rodriguez, Alex', 'Anthony, Mark', 'Lopez, Jennifer', 'Smith, Will', 'Perry, Katy', 'Moore, Demi', 'Ryan, Meg', 'Allen, Woody', 'Chase, Chevy', 'Fey, Tina', 'Wilde, Olivia', 'King, Larry', 'Goldberg, Whoopi', 'Hogan, Hulk', 'Mars, Bruno', 'Simpson, Homer', 'Man, Bat']


// ***** => = FUNCTION *****

// Array.prototype.filter()
// Filter the list of inventors for those who were born in the 1500's
// const fifteen = inventors.filter(function(inventor) {
//   if(inventor.year >= 1500 && inventor.year < 1600) {
//     return true;
//   }
// }); one way of writing it
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

console.table(fifteen);


// Array.prototype.map()
// Give us an array of the inventory first and last names
const firstNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));

console.log(firstNames);


// Array.prototype.sort()
// Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// }); one way of writing it

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(ordered);


// Array.prototype.reduce()
// How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);


// Sort the inventors by years lived
const yearsLived = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
  // if(lastGuy > nextGuy) {
  //   return -1;
  // } else {
  //   return 1;
  // }
});

console.table(yearsLived);


// Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// // next line - calling links in .mw-category
// // const links = Array.from(category.querySelector.querySelectorAll('a')); like this or
// const links = [...category.querySelectorAll('a')]; // ... = ES6 spread

// const de = links
//               .map(link => link.textContent) // give us text
//               .filter(streetName => streetName.includes('de'));
// ***** Will only work in the link provided *****


// Sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);


// Reduce Exercise
// Sum up the instances of  each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 0; // if there is no obj item, then set it to 0, otherwise ++ 
  }
  obj[item]++;
  return obj;
}, {});

console.table(transportation);