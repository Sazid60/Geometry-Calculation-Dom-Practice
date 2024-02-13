function calculateRectangleArea(){
    // console.log('rectangle')
    //Get Width 
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(typeof width);

    //get Length
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    // console.log(lengthText)
    const length =  parseFloat(lengthText);
    console.log(typeof length);

    //calculate Rectangle Area 
    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}