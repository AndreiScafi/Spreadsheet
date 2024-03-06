//Functions
const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

console.log(range(1, 5));

window.onload = () => {
    const container = document.getElementById('container');
    const createLabel = (name) => {
        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = name;
        container.appendChild(label);
    };
};
//End of Functions