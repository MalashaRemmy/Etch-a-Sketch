const container = document.getElementById('gridContainer');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
  container.innerHTML = ''; //To clear the previous grid
  const squareSize = 960 / size; // Each square adjusts to fit the total width

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('gridSquare');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hovering effect on a square
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'green'; // basic hover color
    });

    container.appendChild(square);
  }
}

// Initialize default 16x16 grid webpage of square divs - by JS not HTML
createGrid(16);

// Button to reset grid
resetButton.addEventListener('click', () => {
  let newSize = prompt('Enter number of squares per side (max number 100):');
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Invalid number. Please enter a number between 1 and 100.');
  }
});


