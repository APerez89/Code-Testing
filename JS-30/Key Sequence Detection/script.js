const pressed = [];
const secretCode = 'alex';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  // (next line) just takes the length of the secretCode var (4 characters length) and the (-1) makes sure it doesnt go further than the length of secretCode
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    alert('you found the secret code');
    // adds random things when secret code is done
    // cornify_add();
  }
  console.log(pressed);
});