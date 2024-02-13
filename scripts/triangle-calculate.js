



// console.log('connected')

// get bse and height of the triangle and calculate the area using the provided formula & display the output 
// step-1 : get base Value of te triangle
// step-2: added an id in the base input field
// step-3:used getElementById to access the input field
// step-4: get value from the input filed (value is string now)
// step-5: convert the value in number using parseFloat()


function calculateTriangleArea() {
    // console.log('inside Function')
    ///////////////////////////////////////////////// Triangle Base Value 

    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    // console.log(triangleBaseText);
    // console.log(typeof triangleBaseText); // string value dekhabe even number dileo
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base)
    console.log(base)

    ///////////////////////////////////////////////// Triangle Height Value 
    const triangleHeightInput = document.getElementById('triangle-height');
    // console.log(triangleHeightInput);
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);

    // Calculate Triangle Area
    const area = 0.5 * base * height
    console.log('Area of the Triangle is:', area)

    //Display Area 
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

    //for side area box
    const sideContainer = document.getElementById('area-container')
    const newParagraph = document.createElement('p');
    newParagraph.style.fontSize = '20px';
    newParagraph.style.fontWeight = '600'
    newParagraph.style.paddingTop = '20px';
    newParagraph.innerText = 'Triangle Area is =' + area;
    sideContainer.appendChild(newParagraph)
}


