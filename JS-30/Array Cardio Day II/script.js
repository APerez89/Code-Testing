const people = [
  { name: 'Alex', year: 1989 },
  { name: 'Jay', year: 1992 },
  { name: 'Nathan', year: 1986 },
  { name: 'Erica', year: 1989 },
];

const comments = [
  { text: 'This is text!', id: 12345 },
  { text: 'Object of arrays here', id: 54321 },
  { text: 'This is array cardio day 2', id: 09876 },
  { text: 'Get Learnt', id: 67890 },
  { text: 'Me love you long time!', id: 10293 },
];

// Some & Every checks
// Array.prototype.some()  is at least one person 19?
// Array.prototype.every()  is everyone 19?
// const isAdult = poeple.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if (currentYear - personalbar.year >= 19) {
//     return true;
//   }
// }); could be written like this (long way)

// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//   return currentYear - person.year >= 19;
// });

// or could do this (apparently this is big stuff)
const isAdult = people.some(person => ((new Date()).
  getFullYear()) - person.year >= 19 );

console.log({isAdult});


const allAdults = people.every(person => ((new Date()).
  getFullYear()) - person.year >= 19);

console.log({allAdults});


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 09876
// const comment = comments.find(function(comment) {
//   if (comment.id === '09876') {
//     return true;
//   }
// });

const comment = comments.find(comment => comment.id === 09876);

console.log(comment);


// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 09876
const index = comments.findIndex(comment => comment.id === 09876);
// comments.splice(index, 1);
console.table(index);


const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index +1)
];

console.table(newComments);