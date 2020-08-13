'use strict';

let burgerMenu = document.querySelector('.burger-menu'),
    nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', burgerHandler);

function burgerHandler() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        nav.style.display = 'block';
    } else nav.style.display = 'none';
}