import './style.css';
import compHome from './myHome.js';
import compContact from './myContact.js';
import compMenu from './myMenu.js';

let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');

let main = document.querySelector('.main-content');
main.appendChild(compHome());

home.addEventListener('click', () => {
    main.textContent = '';
    main.appendChild(compHome());
});

menu.addEventListener('click', () => {
    main.textContent = '';
    main.appendChild(compMenu());
});

contact.addEventListener('click', () => {
    main.textContent = '';
    main.appendChild(compContact());
});