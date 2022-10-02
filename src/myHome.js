import pizzaPhoto from './logo-pizza.jpg'

export default function compHome() {
    let main = document.createElement('div');
    main.classList.add('main-home');

    let imgbox = document.createElement('div');
    imgbox.classList.add('homeimg');
    let homeImg = document.createElement('img');
    homeImg.src = pizzaPhoto;
    imgbox.appendChild(homeImg);
    main.appendChild(imgbox);

    let title = document.createElement('h2');
    title.textContent = "Welcome at Matthew's Pizza!"
    main.appendChild(title);

    let grid = document.createElement('div');
    grid.classList.add('grid');

    let leftText = document.createElement('div');
    leftText.classList.add('left');
    leftText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie nunc non blandit.';
    grid.appendChild(leftText);

    let rightText = document.createElement('div');
    rightText.classList.add('right');

    let para1 = document.createElement('div');
    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    rightText.appendChild(para1);

    let para2 = document.createElement('div');
    para2.textContent = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    rightText.appendChild(para2);

    grid.appendChild(rightText);

    main.appendChild(grid);

    // let title = document.createElement('h2');
    // title.textContent = "Welcome at Matthew's Pizza!"
    // main.appendChild(title);

    // let grid = document.createElement('div');
    // grid.classList.add('grid');

    // let imgbox = document.createElement('div');
    // imgbox.classList.add('homeimg');
    // let homeImg = document.createElement('img');
    // homeImg.src = pizzaPhoto;
    // imgbox.appendChild(homeImg);
    // grid.appendChild(imgbox);

    // let sidetext = document.createElement('div');
    // sidetext.classList.add('sidetext');

    // let header = document.createElement('h2');
    // header.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie nunc non blandit.';
    // sidetext.appendChild(header);

    // let para1 = document.createElement('p');
    // para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    // sidetext.appendChild(para1);

    // let para2 = document.createElement('p');
    // para2.textContent = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    // sidetext.appendChild(para2);

    // grid.appendChild(sidetext);

    // main.appendChild(grid);

    return main;
}

