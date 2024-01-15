window.addEventListener("DOMContentLoaded", (event) => {

vastaus = document.querySelector('#vastaus');
nappulat = document.querySelector('#nappulat');

//add = document.querySelector('#add');
//minus = document.querySelector('#minus');
//multiply = document.querySelector('#multiply');
//divide = document.querySelector('#divide');
//one = document.querySelector('#one');
//two = document.querySelector('#two');
//three = document.querySelector('#three');
//four = document.querySelector('#four');
//five = document.querySelector('#five');
//six = document.querySelector('#six');
//seven = document.querySelector('#seven');
//eight = document.querySelector('#eight');
//nine = document.querySelector('#nine');
//zero = document.querySelector('#zero');
equals = document.querySelector('#equals');


// laskutoimitukset
const lisaa = function(a, b) {
    return a + b;
}

const vahenna = function(a, b) {
    return a - b;
}


let numeroN = [];
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
            // convert list of numbers to single number
            numeroN = Number(numeroN);
            // move numbers to from N to X variable and clear N variable to accept more numbers
            numeroX = numeroN;
            numeroN = [];
            break;

        case 'minus':
            let miinus = document.createElement('miinus');
            miinus.innerText = '-';
            vastaus.appendChild(miinus);
            // valitse funktio laskutomitus
            valinta = 'miinus';
            numeroX = numeroN;
            numeroN = null;
            break;
        case 'one':
            let yksi = document.createElement('yksi');
            yksi.innerText = '1';
            vastaus.appendChild(yksi);
            num = 1;
            numeroN += num;
                break;
        case 'two':
            let kaksi = document.createElement('kaksi');
            kaksi.innerText = '2';
            vastaus.appendChild(kaksi);
            num = 2;
            numeroN += num;
                break;
        case 'three':
            let three = document.createElement('three');
            three.innerText = '3';
            vastaus.appendChild(three);
            num = 3;
            numeroN += num;
                break;
        case 'four':
            let four = document.createElement('four');
            four.innerText = '4';
            vastaus.appendChild(four);
            num = 4;
            numeroN += num;
                break;
        case 'five':
            let five = document.createElement('five');
            five.innerText = '5';
            vastaus.appendChild(five);
            num = 5;
            numeroN += num;
                break;
        case 'six':
            let six = document.createElement('six');
            six.innerText = '6';
            vastaus.appendChild(six);
            num = 6;
            numeroN += num;
                break;
        case 'seven':
            let seven = document.createElement('seven');
            seven.innerText = '7';
            vastaus.appendChild(seven);
            num = 7;
            numeroN += num;
                break;
        case 'eight':
            let eight = document.createElement('eight');
            eight.innerText = '8';
            vastaus.appendChild(eight);
            num = 8;
            numeroN += num;
                break;
        case 'nine':
            let nine = document.createElement('nine');
            nine.innerText = '9';
            vastaus.appendChild(nine);
            num = 9;
            numeroN += num;
                break;
        case 'zero':
            let zero = document.createElement('zero');
            zero.innerText = '0';
            vastaus.appendChild(zero);
            num = 0;
            numeroN += num;
                break;
    }
});



// laskimen toiminta funktio
let operate = function(valinta) {
    if (valinta == 'add'){
        vast = lisaa(numeroN, numeroX);
        return vast;
    }   else if (valinta == 'miinus'){
        vast = vahenna(numeroX, numeroN);
        return vast;
    }
};

// ythäkuin aktivoi laskutoimituksen
equals.addEventListener('click', () => {
    numeroN = Number(numeroN);
    console.log(numeroN);
    console.log(operate(valinta));
});






});