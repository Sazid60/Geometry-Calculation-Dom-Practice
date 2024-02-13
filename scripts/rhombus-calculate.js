function calculateRhombusArea(){
const d1 = getInputById('rhombus-d1') ;
const d2 =getInputById('rhombus-d2') ;

area = 0.5*d1*d2;

areaValuePush('rhombus-area',area)
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