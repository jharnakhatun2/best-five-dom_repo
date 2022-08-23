//Common Functions
//================

function inputFieldValueGetById(inputFieldId) {
    const inputFieldValueById = document.getElementById(inputFieldId);
    const inputFieldValueString = inputFieldValueById.value;
    // Input Field Validation
    if(isNaN(inputFieldValueString)){
        alert('Please enter a valid number!');
        inputFieldValueById.value = '';
        return;
    }
    else if(inputFieldValueString < 0){
        alert('Negative number is not allowed!');
        inputFieldValueById.value = '';
        return;
    }
    else{
        const inputFieldValue = parseFloat(inputFieldValueString);
        inputFieldValueById.value = '';
        return inputFieldValue;
    }
    
}

function elementTextGetById(elementId) {
    const elementTextId = document.getElementById(elementId);
    const elementTextValueString = elementTextId.innerText;
    const elementTextValue = parseFloat(elementTextValueString);
    return elementTextValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


