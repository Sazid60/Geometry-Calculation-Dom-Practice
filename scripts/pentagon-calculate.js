function calculatePentagonArea(){
const p = getElementFieldById('pentagon-perimeter');
const b = getElementFieldById('pentagon-apothem');
const area = 0.5 * p *b;
setElementFieldById('pentagon-area',area)

//for side area box
const sideContainer = document.getElementById('area-container')
const newParagraph = document.createElement('p');
newParagraph.style.fontSize='20px';
newParagraph.style.fontWeight ='600'
newParagraph.style.paddingTop ='20px';
newParagraph.innerText = 'Ellipse Area is ='+ area;
sideContainer.appendChild(newParagraph)
}

function getElementFieldById(elementId){
const elementField = document.getElementById(elementId);
const elementFieldText = elementField.value;
const elementFieldValue = parseFloat(elementFieldText) 
return elementFieldValue;
}

function setElementFieldById(areaElementId,area){
const areaElementField = document.getElementById(areaElementId);
areaElementField.innerText = area;
}