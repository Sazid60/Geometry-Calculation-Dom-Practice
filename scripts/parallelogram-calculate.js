
function calculateParallelogramArea(){
const base = getInputValueById('paralellogram-base');
const height = getInputValueById('paralellogram-height');

const area = base * height;

setInnerTextById('parallelogram-area', area);

//for side area box
const sideContainer = document.getElementById('area-container')
const newParagraph = document.createElement('p');
newParagraph.style.fontSize='20px';
newParagraph.style.fontWeight ='600'
newParagraph.style.paddingTop ='20px';
newParagraph.innerText = 'Pralellogram Area is ='+ area;
sideContainer.appendChild(newParagraph)

// console.log(base);
}

//click function e value dile ei function ta amader id gular vitre theke value niye ja ja kaj kora dorkar sob kore dibe ar ki
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId,area){
    const areaFind = document.getElementById(elementId);
    areaFind.innerText = area;
}
