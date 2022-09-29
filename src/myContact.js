import phoneMap from './contact-photo.jpg';

export default function compContact() {
    let contact = document.createElement('div');
    contact.classList.add('contact');
    
    let photoPlace = document.createElement('div');
    photoPlace.classList.add('contact-photo');
    let phoneImg = document.createElement('img');
    phoneImg.src = phoneMap;
    photoPlace.appendChild(phoneImg);
    contact.appendChild(photoPlace);
    
    let info = document.createElement('div');
    info.classList.add('info-time');
    
    let time = document.createElement('div');
    time.classList.add('time');
    
    let open = document.createElement('h3');
    open.textContent = 'We are open at:';
    time.appendChild(open);
    
    let monday = document.createElement('div');
    monday.textContent = 'Monday: 7:00 - 21:00';
    time.appendChild(monday);
    
    let tuesday = document.createElement('div');
    tuesday.textContent = 'Tuesday: 7:00 - 21:00';
    time.appendChild(tuesday);
    
    let wednesday = document.createElement('div');
    wednesday.textContent = 'Wednesday: 7:00 - 21:00';
    time.appendChild(wednesday);
    
    let thursday = document.createElement('div');
    thursday.textContent = 'Thursday: 7:00 - 21:00';
    time.appendChild(thursday);
    
    let friday = document.createElement('div');
    friday.textContent = 'Friday: 7:00 - 22:00';
    time.appendChild(friday);
    
    let saturday = document.createElement('div');
    saturday.textContent = 'Saturday: 7:00 - 22:00';
    time.appendChild(saturday);
    
    let sunday = document.createElement('div');
    sunday.textContent = 'Sunday: Closed';
    time.appendChild(sunday);
    
    info.appendChild(time);

    let addressBox = document.createElement('div');
    addressBox.classList.add('address');

    let address = document.createElement('h3');
    address.textContent = 'Address:';
    addressBox.appendChild(address);

    let street = document.createElement('div');
    street.textContent = 'ul. Kamienna 3';
    addressBox.appendChild(street);

    let postcode = document.createElement('div');
    postcode.textContent = '31-403 Krakow';
    addressBox.appendChild(postcode);

    let phone = document.createElement('h3');
    phone.textContent = 'Phone:';
    addressBox.appendChild(phone);

    let number = document.createElement('div');
    number.textContent = '+48 123 123 123';
    addressBox.appendChild(number);

    info.appendChild(addressBox);

    contact.appendChild(info);

    let form = document.createElement('form');
    form.classList.add('message');

    let formTitle = document.createElement('h3');
    formTitle.textContent = 'Send us a message!';
    form.appendChild(formTitle);

    let name = document.createElement('div');

    let labelName = document.createElement('label');
    labelName.textContent = 'Name:';
    labelName.setAttribute('for', 'name');
    name.appendChild(labelName);

    let inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('required', '');
    name.appendChild(inputName);

    form.appendChild(name);

    let email = document.createElement('div');

    let labelEmail = document.createElement('label');
    labelEmail.textContent = 'E-mail:';
    labelEmail.setAttribute('for', 'mail');
    email.appendChild(labelEmail);

    let inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('id', 'mail');
    inputEmail.setAttribute('required', '');
    email.appendChild(inputEmail);

    form.appendChild(email);

    let text = document.createElement('div');

    let labelText = document.createElement('label');
    labelText.textContent = 'Message:';
    labelText.setAttribute('for', 'info');
    text.appendChild(labelText);

    let typeText = document.createElement('textarea');
    typeText.setAttribute('name', 'info');
    typeText.setAttribute('id', 'info');
    typeText.setAttribute('cols', '45');
    typeText.setAttribute('rows', '15');
    typeText.setAttribute('required', '');
    text.appendChild(typeText);

    form.appendChild(text);

    let btn = document.createElement('button');
    btn.textContent = 'Submit';
    btn.setAttribute('type', 'submit');

    form.appendChild(btn);

    contact.appendChild(form);

    return contact
}