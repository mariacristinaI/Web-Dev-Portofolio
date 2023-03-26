/**********  CHECKBOX MAINTAINED **********/
/*const checkbox = document.querySelector('input[type="checkbox"]'); Commented in order to avoid redeclaration
checkbox.addEventListener('change', function () {
    if (this.checked) {
    // do something if the checkbox is checked
    } else {
    // do something if the checkbox is not checked
    }
});

// The below code This code will store the state of the checkbox in local storage under the key "checkbox".
// When the page loads, it will retrieve the stored value and set the checkbox's state accordingly. 
// When the checkbox state changes, it will update the stored value in local storage.
// Get the value from local storage on page load
const checked = localStorage.getItem('checkbox') === 'true';
checkbox.checked = checked;

// Add an event listener to the checkbox
checkbox.addEventListener('change', function () {
    // Set the value in local storage when the checkbox state changes
    localStorage.setItem('checkbox', this.checked);
});*/



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("to-top").style.display = "block";
  } else {
    document.getElementById("to-top").style.display = "none";
  }
}

/********** JUMP **********/
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/********** REGEX **********/
/* A regular expression that checks if the email and name are valid. */
const emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z.-]+\.[a-z]{2,3}$/;
const nameRegex = new RegExp('^[A-Z][a-z]+ ([A-Z]{1}\.? )?[A-Z][a-z]+(-[A-Z][a-z]+)?');

/********** Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navContainer = document.querySelector('.nav-container');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  navContainer.classList.toggle('show');
});**********/

/********** TIME **********/
const today = new Date();
let currentYear = today.getFullYear();
document.getElementById("year").innerHTML = currentYear;