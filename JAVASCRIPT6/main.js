const myHeading = document.querySelector('h2');
myHeading.textContent = 'Cidades';

const londres =  document.querySelector('h1');
londres.textContent = 'Londres';

let myImage = document.querySelector('img');

myImage.onclick =  function(){
    let mysrc = myImage.getAttribute('src');

    if(mysrc === 'img/londres-big-ben.jpeg') {
        myImage.setAttribute('src','img/conheça-londres.jpg');
    } else {
        myImage.setAttribute('src', 'img/londres-big-ben.jpeg');
    }
}

