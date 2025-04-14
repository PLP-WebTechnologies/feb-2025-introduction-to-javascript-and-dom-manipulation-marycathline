
 // Change text content
const dynamicText = document.getElementById('dynamicText');
dynamicText.textContent = 'This text has been changed dynamically by JavaScript!';

// Modify CSS styles
const styleButton = document.getElementById('styleButton');
styleButton.addEventListener('click', () => {
    dynamicText.style.color = 'blue';
    dynamicText.style.fontSize = '20px';
});

// Add an element
const addElementButton = document.getElementById('addElementButton');
const newElementContainer = document.getElementById('newElementContainer');

addElementButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'A new paragraph added dynamically!';
    newParagraph.style.color = 'blue';
    newParagraph.style.fontSize = '16px';
    newElementContainer.appendChild(newParagraph);
});

// Remove an element
const itemList = document.getElementById('itemList');

// Remove the first list item when a click happens on the list.
itemList.addEventListener('click', () => {
    if (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
});