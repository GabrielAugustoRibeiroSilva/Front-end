

let boxDiv = document.querySelector('.container div');
boxDiv.setAttribute('class', 'box');

selectColors()

function selectColors(){
    let select = document.querySelector('#colors')
    let optionValue = select.options[select.selectedIndex].value;

    colorChange(optionValue);
}

function colorChange(optionValue){
    if (optionValue === 'blue'){
        boxDiv.style.cssText = 'background-color: blue;';
    }
    if (optionValue === 'green'){
        boxDiv.style.cssText = 'background-color: green;';
    }
    if (optionValue === 'yellow'){
        boxDiv.style.cssText = 'background-color: yellow;';
    }
    if (optionValue === 'red'){
        boxDiv.style.cssText = 'background-color: red;';
    }
    if (optionValue === 'color'){
        boxDiv.style.cssText = 'background-color: none;';
    }
    if (optionValue === 'white'){
        boxDiv.style.cssText = 'background-color: white;';
    }
    if (optionValue === 'grey'){
        boxDiv.style.cssText = 'background-color: grey;';
    }
    if (optionValue === 'purple'){
        boxDiv.style.cssText = 'background-color: purple;';
    }
    if (optionValue === 'brown'){
        boxDiv.style.cssText = 'background-color: brown;';
    }
    if (optionValue === 'gold'){
        boxDiv.style.cssText = 'background-color: gold;';
    }
    if (optionValue === 'orange'){
        boxDiv.style.cssText = 'background-color: orange;';
    }
    if (optionValue === 'black'){
        boxDiv.style.cssText = 'background-color: black;';
    }
    if (optionValue === 'cyan'){
        boxDiv.style.cssText = 'background-color: cyan;';
    }          
}