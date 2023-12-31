/* BurgerMenu Open/close */

const menuButton = document.querySelector('.lineBurger');
const mainNavbarMobileMenu = document.querySelector('.mainNavbarMobileMenu');
const closeButtonMenu = document.querySelector('.buttonClose');

let menuToggleStatus = false;

// Function to close the dropdown menu.
function closeMenu() {
  mainNavbarMobileMenu.style.display = 'none';
  menuToggleStatus = false;
}

// Function to check if the click occurred inside or outside the menu.
function handleOutsideClick(event) {
  const targetElement = event.target;
  const isMenuOpen = menuToggleStatus;
  const isClickInsideMenu = mainNavbarMobileMenu.contains(targetElement);
  const isClickOnButton = targetElement === menuButton;

  if (isMenuOpen && !isClickInsideMenu && !isClickOnButton) {
    closeMenu();
  }
}
// Add a click event listener on the document to detect clicks.
document.addEventListener('click', handleOutsideClick);

// Function to toggle the menu open/close state.
function menuToggle() {
  if (menuToggleStatus) {
    mainNavbarMobileMenu.style.display = 'flex';
  } else {
    mainNavbarMobileMenu.style.display = 'none';
  }
}

// AAdd a click event on the button to open/close the menu.
menuButton.addEventListener('click', function() {
  menuToggleStatus = !menuToggleStatus;
  menuToggle();
});

closeButtonMenu.addEventListener('click', function() {
  menuToggleStatus = false;
  menuToggle();
});

/* CountDown */

// Self-executing function for the countdown.
(function () {
  // Define time units in milliseconds.
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // Get the current date and the date of the next birthday.
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/16/",
      offerEnds = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;

  // If the birthday has already passed this year, update the date for next year.
  if (today > offerEnds) {
    offerEnds = dayMonth + nextYear;
  }

  // Get the remaining time until the birthday.
  const countDown = new Date(offerEnds).getTime();
  const x = setInterval(function() {    
    const now = new Date().getTime();
    const distance = countDown - now;

    // Calculate the remaining days, hours, minutes, and seconds.
    document.getElementById("days").innerText = Math.floor(distance / day),
    document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

  }, 0);
})();

/* Dropdown FAQ */

// Get a list of the questions in the FAQ.
let questions = document.getElementsByClassName("question");

// Add a click event to each question.
for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    // Toggle the "active" class to highlight the question.
    this.classList.toggle("active");

    // Show or hide the associated answer for the question.
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
