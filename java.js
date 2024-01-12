window.addEventListener("DOMContentLoaded", (event) => {

vastaus = document.querySelector('#vastaus');
nappulat = document.querySelector('#nappulat');
add = document.querySelector('#add');
minus = document.querySelector('#minus');
multiply = document.querySelector('#multiply');
divide = document.querySelector('#divide');
one = document.querySelector('#one');
two = document.querySelector('#two');
three = document.querySelector('#three');
four = document.querySelector('#four');
five = document.querySelector('#five');
six = document.querySelector('#six');
seven = document.querySelector('#seven');
eight = document.querySelector('#eight');
nine = document.querySelector('#nine');
zero = document.querySelector('#zero');
equals = document.querySelector('#equals');


// laskutoimitukset
const lisaa = function(a, b) {
    return a + b;
}

const vahenna = function(a, b) {
    return a - b;
}

let numeroN = 0;
let numeroX = 0;
let valinta = '';


// kun painat nappia tunnistaa painalluksen.
nappulat.addEventListener('click', (event) => {
    let target = event.target; 
    
    switch(target.id) {
        case 'add':
            let plus = document.createElement('plus');
            plus.innerText = '+';
            vastaus.appendChild(plus);
            // valitse funktio laskutomitus
            valinta = 'add';
            break;

        case 'minus':
            let miinus = document.createElement('miinus');
            miinus.innerText = '-';
            vastaus.appendChild(miinus);
            // valitse funktio laskutomitus
            valinta = 'miinus';
            break;
        case 'one':
            let yksi = document.createElement('yksi');
            yksi.innerText = '1';
            vastaus.appendChild(yksi);
            num = 1;
             numeroN = num;
                break;
        case 'two':
            let kaksi = document.createElement('kaksi');
            kaksi.innerText = '2';
            vastaus.appendChild(kaksi);
            num = 2;
            numeroX = num;
                break;
    }
});


// laskimen toiminta funktio
let operate = function(valinta) {
    if (valinta == 'add'){
        vast = lisaa(numeroN, numeroX);
        return vast;
    }   else if (valinta == 'miinus'){
        vast = vahenna(numeroN, numeroX);
        return vast;
    }
};

// ythäkuin aktivoi laskutoimituksen
equals.addEventListener('click', () => {
    console.log(operate(valinta));
});






});