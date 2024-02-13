function calculateRhombusArea(){
const d1 = getInputById('rhombus-d1') ;
const d2 =getInputById('rhombus-d2') ;

const area = 0.5*d1*d2;

areaValuePush('rhombus-area',area)

//for side area box
const sideContainer = document.getElementById('area-container')
const newParagraph = document.createElement('p');
newParagraph.style.fontSize='20px';
newParagraph.style.fontWeight ='600'
newParagraph.style.paddingTop ='20px';
newParagraph.innerText = 'Rhombus Area is ='+ area;
sideContainer.appendChild(newParagraph)
}

function getInputById(inputFieldId){
const inputField = document.getElementById(inputFieldId);
const inputValueText = inputField.value;
const inputValue = parseFloat(inputValueText);
console.log(inputValue)
return inputValue;
}

function areaValuePush(fieldId,area){
const areaValueField = document.getElementById(fieldId);
areaValueField.innerText = area;
}