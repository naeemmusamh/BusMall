'use strict';

let hightTryclick = 25;
let startclick = 0;
let newArray = [];
let image1Element = document.getElementById('image1');
let image2Element = document.getElementById('image2');
let image3Element = document.getElementById('image3');

function Mall(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.show = 0;
    newArray.push(this);
}

new Mall('bag', 'img/bag.jpg');
new Mall('banana', 'img/banana.jpg');
new Mall('bathroom', 'img/bathroom.jpg');
new Mall('boots', 'img/boots.jpg');
new Mall('breakfast', 'img/breakfast.jpg');
new Mall('bubblegum', 'img/bubblegum.jpg');
new Mall('chair', 'img/chair.jpg');
new Mall('cthulhu', 'img/cthulhu.jpg');
new Mall('dog-duck', 'img/dog-duck.jpg');
new Mall('dragon', 'img/dragon.jpg');
new Mall('pen', 'img/pen.jpg');
new Mall('pet-sweep', 'img/pet-sweep.jpg');
new Mall('scissors', 'img/scissors.jpg');
new Mall('shark', 'img/shark.jpg');
new Mall('sweep', 'img/sweep.png');
new Mall('tauntaun', 'img/tauntaun.jpg');
new Mall('unicorn', 'img/unicorn.jpg');
new Mall('usb', 'img/usb.gif');
new Mall('water-can', 'img/water-can.jpg');
new Mall('wine-glass', 'img/wine-glass.jpg');

// console.log(newArray);

let image1Box;
let image2Box;
let image3Box;


function renderThereimage() {
    image1Box = randomNumber();
    image2Box = randomNumber();
    image3Box = randomNumber();

    while (image1Box === image2Box) {
        image1Box = randomNumber();
    }

    image1Element.setAttribute('src', newArray[image1Box].source);
    image2Element.setAttribute('src', newArray[image2Box].source);
    image3Element.setAttribute('src', newArray[image3Box].source);
}
renderThereimage();

function randomNumber() {
    let randomnumber = Math.floor(Math.random() * newArray.length);
    return randomnumber;
}

image1Element.addEventListener('click', handleClicking);
image2Element.addEventListener('click', handleClicking);
image3Element.addEventListener('click', handleClicking);


function handleClicking(event) {
    startclick++;
    if (startclick <= hightTryclick) {

        if (event.target.id === 'image1') {
            newArray[image1Box].vote++;
            newArray[image1Box].show++;
            newArray[image2Box].show++;
            newArray[image3Box].show++;
        } else if (event.target.id === 'image2') {
            newArray[image2Box].voe++;
            newArray[image1Box].show++;
            newArray[image2Box].show++;
            newArray[image3Box].show++;
        } else {
            newArray[image3Box].vote++;
            newArray[image1Box].show++;
            newArray[image2Box].show++;
            newArray[image3Box].show++;
        }
        renderThereimage();
    } else {
        let submitElement = document.getElementById('b1');
        let unorderListelement = document.getElementById('list');
        unorderListelement.appendChild(submitElement);
        unorderListelement.addEventListener('click', unorderlist);

        function unorderlist(event) {

            for (let x = 0; x < newArray.length; x++) {
                let liElement = document.createElement('li');
                unorderListelement.appendChild(liElement);
                liElement.textContent = `image${newArray[x].name} it has be ${newArray[x].vote} time votes and showing ${newArray[x].show} time.`
                unorderListelement.removeEventListener('click', unorderlist);
            }
        }
        image1Element.removeEventListener('click', handleClicking);
        image2Element.removeEventListener('click', handleClicking);
        image3Element.removeEventListener('click', handleClicking);
    }

}