function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  // scrollY tells you how far down you are in to the window
  console.log(window.scrollY);
  sliderImages.forEach(sliderImage => {
    // Half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // innerHeight gives pixel level where you are at the bottom of the page

    // Bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height; // offsetTop will tell how far the top of the image is from the top of the window. how far down the image is!

    const isHalfShown = slideInAt > sliderImage.offsetTop; // will make sure slide in at value is greater than the top of where the image is

    const isNotScrolledPast = window.scrollY < imageBottom; // want to make sure you are not scrolled passed

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

// any time you do scroll, think about debouncing (all scroll functions)
window.addEventListener('scroll', debounce(checkSlide));