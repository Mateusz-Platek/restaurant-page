import pizzaMargherita from './pizza-margherita.jpg';
import pizzaCarbonara from './pizza-carbonara.jpg';
import pizzaCapriciossa from './pizza-capricciosa.jpg';
import pizzaPepperioni from './pizza-pepperoni.jpg';
import pizzaVege from './pizza-vege.jpg';
import pizzaAmericana from './pizza-americana.jpg';

export default function compMenu() {
    let menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    let menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our pizzas:';
    menuContent.appendChild(menuTitle);

    let pizzas = document.createElement('div');
    pizzas.classList.add('pizzas');

    let orderBtn = document.createElement('button');
    orderBtn.textContent = 'Order';

    let pizzaBoxMarg = document.createElement('div');

    let pizzaImgBoxMarg = document.createElement('div');
    pizzaImgBoxMarg.classList.add('pizza-img-marg');
    let pizzaMargImg = document.createElement('img');
    pizzaMargImg.src = pizzaMargherita;
    pizzaImgBoxMarg.appendChild(pizzaMargImg);
    pizzaBoxMarg.appendChild(pizzaImgBoxMarg);

    let pizzaTitleMarg = document.createElement('h3');
    pizzaTitleMarg.textContent = 'Pizza Margherita';
    pizzaBoxMarg.appendChild(pizzaTitleMarg);

    let pizzaInfoMarg = document.createElement('div');
    pizzaInfoMarg.classList.add('pizza-info');
    pizzaInfoMarg.textContent = 'Ingridients: Tristique senectus et netus et malesuada fames. Donec et odio pellentesque diam volutpat.';
    pizzaBoxMarg.appendChild(pizzaInfoMarg);

    pizzaBoxMarg.appendChild(orderBtn);

    pizzas.appendChild(pizzaBoxMarg);

    let pizzaBoxPepp = document.createElement('div');

    let pizzaImgBoxPepp = document.createElement('div');
    pizzaImgBoxPepp.classList.add('pizza-img-pepp');
    let pizzaPeppImg = document.createElement('img');
    pizzaPeppImg.src = pizzaPepperioni;
    pizzaImgBoxPepp.appendChild(pizzaPeppImg);
    pizzaBoxPepp.appendChild(pizzaImgBoxPepp);

    let pizzaTitlePepp = document.createElement('h3');
    pizzaTitlePepp.textContent = 'Pizza Pepperoni';
    pizzaBoxPepp.appendChild(pizzaTitlePepp);

    let pizzaInfoPepp = document.createElement('div');
    pizzaInfoPepp.classList.add('pizza-info');
    pizzaInfoPepp.textContent = 'Ingridients: Duis at consectetur lorem donec. Amet est placerat in egestas erat. Etiam sit amet nisl purus in mollis.';
    pizzaBoxPepp.appendChild(pizzaInfoPepp);

    pizzaBoxPepp.appendChild(orderBtn.cloneNode(true));

    pizzas.appendChild(pizzaBoxPepp);

    let pizzaBoxAmer = document.createElement('div');

    let pizzaImgBoxAmer = document.createElement('div');
    pizzaImgBoxAmer.classList.add('pizza-img-amer');
    let pizzaAmerImg = document.createElement('img');
    pizzaAmerImg.src = pizzaAmericana;
    pizzaImgBoxAmer.appendChild(pizzaAmerImg);
    pizzaBoxAmer.appendChild(pizzaImgBoxAmer);

    let pizzaTitleAmer = document.createElement('h3');
    pizzaTitleAmer.textContent = 'Pizza Americana';
    pizzaBoxAmer.appendChild(pizzaTitleAmer);

    let pizzaInfoAmer = document.createElement('div');
    pizzaInfoAmer.classList.add('pizza-info');
    pizzaInfoAmer.textContent = 'Ingridients: Libero id faucibus nisl tincidunt eget nullam. Sed augue lacus viverra vitae congue eu.';
    pizzaBoxAmer.appendChild(pizzaInfoAmer);

    pizzaBoxAmer.appendChild(orderBtn.cloneNode(true));

    pizzas.appendChild(pizzaBoxAmer);

    let pizzaBoxCapri = document.createElement('div');

    let pizzaImgBoxCapri = document.createElement('div');
    pizzaImgBoxCapri.classList.add('pizza-img-capri');
    let pizzaCapriImg = document.createElement('img');
    pizzaCapriImg.src = pizzaCapriciossa;
    pizzaImgBoxCapri.appendChild(pizzaCapriImg);
    pizzaBoxCapri.appendChild(pizzaImgBoxCapri);

    let pizzaTitleCapri = document.createElement('h3');
    pizzaTitleCapri.textContent = 'Pizza Capricciosa';
    pizzaBoxCapri.appendChild(pizzaTitleCapri);

    let pizzaInfoCapri = document.createElement('div');
    pizzaInfoCapri.classList.add('pizza-info');
    pizzaInfoCapri.textContent = 'Ingridients: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    pizzaBoxCapri.appendChild(pizzaInfoCapri);

    pizzaBoxCapri.appendChild(orderBtn.cloneNode(true));

    pizzas.appendChild(pizzaBoxCapri);

    let pizzaBoxCarbo = document.createElement('div');

    let pizzaImgBoxCarbo = document.createElement('div');
    pizzaImgBoxCarbo.classList.add('pizza-img-carbo');
    let pizzaCarboImg = document.createElement('img');
    pizzaCarboImg.src = pizzaCarbonara;
    pizzaImgBoxCarbo.appendChild(pizzaCarboImg);
    pizzaBoxCarbo.appendChild(pizzaImgBoxCarbo);

    let pizzaTitleCarbo = document.createElement('h3');
    pizzaTitleCarbo.textContent = 'Pizza Carbonara';
    pizzaBoxCarbo.appendChild(pizzaTitleCarbo);

    let pizzaInfoCarbo = document.createElement('div');
    pizzaInfoCarbo.classList.add('pizza-info');
    pizzaInfoCarbo.textContent = 'Ingridients: Duis at consectetur lorem donec. Amet est placerat in egestas erat. Etiam sit amet nisl purus in mollis.';
    pizzaBoxCarbo.appendChild(pizzaInfoCarbo);

    pizzaBoxCarbo.appendChild(orderBtn.cloneNode(true));

    pizzas.appendChild(pizzaBoxCarbo);

    let pizzaBoxVeg = document.createElement('div');

    let pizzaImgBoxVeg = document.createElement('div');
    pizzaImgBoxCarbo.classList.add('pizza-img-veg');
    let pizzaVegImg = document.createElement('img');
    pizzaVegImg.src = pizzaVege;
    pizzaImgBoxVeg.appendChild(pizzaVegImg);
    pizzaBoxVeg.appendChild(pizzaImgBoxVeg);

    let pizzaTitleVeg = document.createElement('h3');
    pizzaTitleVeg.textContent = 'Pizza Vege';
    pizzaBoxVeg.appendChild(pizzaTitleVeg);

    let pizzaInfoVeg = document.createElement('div');
    pizzaInfoVeg.classList.add('pizza-info');
    pizzaInfoVeg.textContent = 'Ingridients: Commodo ullamcorper a lacus vestibulum sed arcu non odio. Et sollicitudin ac orci phasellus egestas.';
    pizzaBoxVeg.appendChild(pizzaInfoVeg);

    pizzaBoxVeg.appendChild(orderBtn.cloneNode(true));

    pizzas.appendChild(pizzaBoxVeg);

    menuContent.appendChild(pizzas);

    return menuContent;
}

/* <div class="menu-content">
    <div class="pizzas">
        <div>
            <div class="pizza-img-carbo"></div>
            <h3>Pizza Carbonara</h3>
            <div class="pizza-info">Ingridients: Duis at consectetur lorem donec. Amet est placerat in egestas erat.</div>
            <button>Order</button>
        </div>
        <div>
            <div class="pizza-img-veg"></div>
            <h3>Pizza Vege</h3>
            <div class="pizza-info">Ingridients: Commodo ullamcorper a lacus vestibulum sed arcu non odio. Et sollicitudin ac orci phasellus egestas.</div>
            <button>Order</button>
        </div>
    </div>
</div> */