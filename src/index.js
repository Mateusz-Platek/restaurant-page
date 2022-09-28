import './style.css';
import compHome from './myHome.js';
import compContact from './myContact.js';

let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');

let main = document.querySelector('.main-content');
//main.appendChild(compHome());


import phoneMap from './contact-photo.jpg';

let phoneImg = document.createElement('img');
phoneImg.src = phoneMap;
let imgPlace = document.querySelector('.contact-photo');
imgPlace.appendChild(phoneImg);


home.addEventListener('click', () => {
    main.textContent = '';
    main.appendChild(compHome());
});

menu.addEventListener('click', () => {
    main.textContent = '';
});

contact.addEventListener('click', () => {
    main.textContent = '';
    main.appendChild(compContact());
});