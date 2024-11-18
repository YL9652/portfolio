'use strict';
// Enforces strict mode to catch common coding errors and improve security

// Add a class, header--dark, when scrolling down
const header = document.querySelector('.header');
// Selects the header element and stores it in the variable `header`

const headerHeight = header.offsetHeight;
// Calculates the height of the header and stores it in `headerHeight`

document.addEventListener('scroll', () => {
  // Sets up an event listener on the document that triggers when the user scrolls

  if (window.scrollY > headerHeight) {
    // Checks if the vertical scroll position is greater than the header's height

    header.classList.add('header--dark');
    // If true, adds the 'header--dark' class to the header for a darkened effect
  } else {
    header.classList.remove('header--dark');
    // If false, removes the 'header--dark' class to restore the original styling
  }
});

// Make #Home transparent
const home = document.querySelector('.home__container');
// Selects the home container element and stores it in the variable `home`

const homeHeight = home.offsetHeight;
// Gets the height of the home element and stores it in `homeHeight`

document.addEventListener('scroll', () => {
  // Adds a scroll event listener to the document

  home.style.opacity = 1 - window.scrollY / homeHeight;
  // Sets the opacity of the home element based on scroll position, decreasing opacity as the user scrolls down
});

// Make Arrow icon display
const arrowUp = document.querySelector('.arrow-up');
// Selects the arrow-up element and stores it in `arrowUp`

document.addEventListener('scroll', () => {
  // Adds a scroll event listener to the document

  if (window.scrollY > homeHeight / 2) {
    // Checks if the vertical scroll position is more than half the height of the home element

    arrowUp.style.opacity = '1';
    // If true, sets the arrow-up element's opacity to 1, making it visible
  } else {
    arrowUp.style.opacity = '0';
    // If false, sets the arrow-up element's opacity to 0, making it invisible
  }
});

// Navbar toggle click
const navbarMenu = document.querySelector('.header__menu');
// Selects the navbar menu element and stores it in `navbarMenu`

const navbarToggle = document.querySelector('.header__toggle');
// Selects the navbar toggle button and stores it in `navbarToggle`

navbarToggle.addEventListener('click', () => {
  // Adds a click event listener to the navbar toggle button

  navbarMenu.classList.toggle('open');
  // Toggles the 'open' class on the navbar menu, showing or hiding the menu
});

// Navbar close menu
navbarMenu.addEventListener('click', () => {
  // Adds a click event listener to the navbar menu

  navbarMenu.classList.remove('open');
  // Removes the 'open' class from the navbar menu, closing the menu
});
