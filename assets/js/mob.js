// function to disable carousel in mobile view and make it stack by stack.
function myFunction(x) {
  if (x.matches) { // If media query matches
    $('div').removeClass("news-slider owl-carousel")
  } else {}
}

var x = window.matchMedia("(max-width: 636px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
// function's work ends here

