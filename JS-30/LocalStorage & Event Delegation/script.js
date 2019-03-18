const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // will try to get it from localStorage, if it isnt there it will fall back to an empty array

// To create a data base that stores items entered into input
function addItem(e) {
  // preventDefault will stop the page from reloading
  e.preventDefault(); // A form will reload the page/send data to external source (server side)
  // *next line* wrap the this.querySelector in () so it will execute first & .value will give us the input the user has typed
  const text = (this.querySelector('[name=item]')).value; // will look in the form tag for something with a name attribute 
  const item = {
    text, // or text: text, 
    done: false
  };

  items.push(item); // will put/push items into the items array line 3
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // clears the input section after user clicks submit
}

// Will create the HTML that will populate into the list
function populateList(plates = [], platesList) { // plates is set into default array - platesList (place where html will be placed)
  platesList.innerHTML = plates.map((plate, i) => {
    // `` HTML is placed inside
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join(''); // map will return an array, .join will take the map made array and turn into a big string
}

addItems.addEventListener('submit', addItem);

populateList(items, itemsList);


// **** LINE 22 BELOW ****
// Every time you add an item, the populateList function is called > then creates a <li> > with a <label> inside
// Every time you add an item, it recreates the entire list. could effect performance. could look up how to update just the single list item rather than re-render the entire list. React.JS


// **** LINE 27 & 28 BELOW ****
// item${i} = item 1, 2, 3, 4 etc *****
// <label for=items${i}/> is linked to the input checkbox. because the <label for/> and the id are the same. (line 27 id is the same as line 28 for)
// like 27 - create turnery operator. plate.done ? = If the pate.done is true, apply 'checked', otherwise keep it '' (blank) - If you put 'null' it will actually show null, so leave it blank


// **** LOCAL STORAGE ****
// What happens when the page is refreshed, the list is cleared out. to prevent that you need to store data in a local storage
// Local Storage is an object in the browser that is a list of things that have been saved to this domain. You can only use strings in local storage
// localStorage in console
// In console, go to "Application" > "Local Storage" > "File://" and there is a key of items and value

// **** LINE 18 FOR LOCAL STORAGE ****
// localStorage.setItem/getItem/removeItem/deleteItem('key', data); *****
// To stringify the objects > JSON.stringify(key) *****

// **** LOCAL STORAGE STRINGIFY ****
// Because local storage can only take strings, you need to convert the objects & arrays into a JSON string

// **** LOCAL STORAGE PARSE **** 
// What needs to be done on page load
// JSON.parse(key); will change it back to what it was originally (an array of objects) *****