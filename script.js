const maxSelections = 3;
let selectedItems = [];

function toggleSelection(img) {
    const item = img.getAttribute('data-name');
    
    if (selectedItems.includes(item)) {
        selectedItems = selectedItems.filter(i => i !== item);
        img.style.border = '';
    } else {
        if (selectedItems.length < maxSelections) {
            selectedItems.push(item);
            img.style.border = '4px solid limegreen';
        } else {
            alert(`You can only select up to ${maxSelections} fruits/pets!`);
        }
    }
}

const fruits = [
    'pepper', 'mushroom', 'cacao', 'beanstalk', 'ember-lily', 'bell-pepper',
    'prickly-pear', 'loquat', 'feijoa', 'elephant-ears', 'sugar-apple', 
    'travelers-fruit', 'guanabana', 'candy-blossom', 'grape'
];

const pets = [
    'dragonfly', 't-rex', 'butterfly', 'disco-bee', 'queen-bee', 'zombie-chicken',
    'fennec-fox', 'mimic-octopus', 'brontosaurus', 'ankylosaurus', 'kappa',
    'kitsune', 'new-kitsune', 'raccoon', 'spinosaurus', 'red-fox'
];

function createItems(category, containerId) {
    const container = document.getElementById(containerId);
    category.forEach(name => {
        const div = document.createElement('div');
        div.style.display = 'inline-block';
        div.style.margin = '15px';
        div.style.textAlign = 'center';

        const img = document.createElement('img');
        img.src = `${name}.png`;
        img.setAttribute('data-name', name);
        img.onclick = () => toggleSelection(img);
        img.style.width = '60px';
        img.style.height = '60px';
        img.style.cursor = 'pointer';

        const label = document.createElement('div');
        label.innerText = name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        div.appendChild(img);
        div.appendChild(label);
        container.appendChild(div);
    });
}

window.onload = () => {
    createItems(pets, 'pets-container');
    createItems(fruits, 'fruits-container');
};
