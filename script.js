/* BurgerMenu Open/close */

const menuButton = document.querySelector('.lineBurger');
const mainNavbarMobileMenu = document.querySelector('.mainNavbarMobileMenu');
const closeButtonMenu = document.querySelector('.buttonClose');

let menuOpenClose = false;

// Function to close the dropdown menu.
function closeMenu() {
  mainNavbarMobileMenu.style.display = 'none';
  menuOpenClose = false;
}

// Function to check if the click occurred inside or outside the menu.
function handleDocumentClick(event) {
  const targetElement = event.target;

  // Check if the menu is open and if the click did not occur inside the menu or on the button.
  if (menuOpenClose && !mainNavbarMobileMenu.contains(targetElement) && targetElement !== menuButton) {
    closeMenu();
  }
}

// Add a click event listener on the document to detect clicks.
document.addEventListener('click', handleDocumentClick);

// Function to toggle the menu open/close state.
function menuToggle() {
  if (menuOpenClose) {
    mainNavbarMobileMenu.style.display = 'flex';
  } else {
    mainNavbarMobileMenu.style.display = 'none';
  }
}

// AAdd a click event on the button to open/close the menu.
menuButton.addEventListener('click', function() {
  menuOpenClose = !menuOpenClose;
  menuToggle();
});

closeButtonMenu.addEventListener('click', function() {
  menuOpenClose = false;
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
      birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;

  // If the birthday has already passed this year, update the date for next year.
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  // Get the remaining time until the birthday.
  const countDown = new Date(birthday).getTime();
  const x = setInterval(function() {    
    const now = new Date().getTime();
    const distance = countDown - now;

    // Calculate the remaining days, hours, minutes, and seconds.
    document.getElementById("days").innerText = Math.floor(distance / day),
    document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

    // If the birthday has passed, display the corresponding message.
    if (distance < 0) {
      document.getElementById("headline").innerText = "It's my birthday!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
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
