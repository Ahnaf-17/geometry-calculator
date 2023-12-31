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
    if(isNaN(base) || isNaN(height)){
        alert('Input must be a number');
        return;
    }

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
    if(isNaN(width) || isNaN(length)){
        alert('Input must be a number');
        return;
    }
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base*height;
    setTextFieldText('parallelogram-area', area)

    if(isNaN(base) || isNaN(height)){
        alert('Input must be a number');
        return;
    }
}

function calculateEllipseArea(){
    const b = getInputValue('ellipse-b')
    const a = getInputValue('ellipse-a')
    const area = 3.1416*b*a;
    const areaTwoDecimal = area.toFixed(2)
    setTextFieldText('ellipse-area', areaTwoDecimal);
    if(isNaN(a) || isNaN(b)){
        alert('Input must be a number');
        return;
    }
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