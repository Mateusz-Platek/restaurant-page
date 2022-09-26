import './style.css';
import pizza from './logo-pizza.jpg'

let pizzaImg = document.querySelector('.homeimg');
const homeImg = document.createElement('img');
homeImg.src = pizza;
pizzaImg.appendChild(homeImg);