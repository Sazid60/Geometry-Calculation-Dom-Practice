function calculateEllipseArea(){
    const p = getElementFieldById('ellipse-p');
    const b = getElementFieldById('ellipse-b');
    const area = Math.PI * p * b;
    setElementFieldById('ellipse-area',area)

    //for side area container
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
    areaElementField.innerText = area.toFixed(2);
    }

