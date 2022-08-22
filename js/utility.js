function inputFieldValueGetById(inputFieldId) {
    const inputFieldValueById = document.getElementById(inputFieldId);
    const inputFieldValueString = inputFieldValueById.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldValueById.value = '';
    return inputFieldValue;
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


