'use strict';

// Add a class, header--dark, when scholl down
const header = document.querySelector('.header');
//const headerHeight = header.getBoundingClientRect().height;
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Make #Home transparent
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  // console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Make Arrow icon display
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = '1';
  } else {
    arrowUp.style.opacity = '0';
  }
});

// Navbar toggle click
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar close menu
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});