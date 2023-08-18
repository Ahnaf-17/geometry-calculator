function calculateTriangleArea(){
    // get triangle base 
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    
    // get triangle height 

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);


    const area = 0.5*base*height;

    // show area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    area = width*length;

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base*height;
    setTextFieldText('parallelogram-area', area)
}

function calculateEllipseArea(){
    const b = getInputValue('ellipse-b')
    const a = getInputValue('ellipse-a')
    const area = 3.1416*b*a;
    setTextFieldText('ellipse-area', area)
}


// common function 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}

function setTextFieldText(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area
}