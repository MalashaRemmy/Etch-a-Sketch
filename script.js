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
    let opacity = Number(square.dataset.opacity);

    if (opacity < 1) {
        opacity += 0.1;
        square.dataset.opacity = opacity;
    }

    square.style.backgroundColor = 
        `rgba(${square.dataset.r}, ${square.dataset.g}, ${square.dataset.b}, ${opacity})`;
    });

    container.appendChild(square);

    // Generate random base color ONCE
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Store color and opacity state
    square.dataset.r = r;
    square.dataset.g = g;
    square.dataset.b = b;
    square.dataset.opacity = 0;
  }

}

// Initialize default 16x16 grid webpage of square divs - by JS not HTML
createGrid(16);

// Button to reset grid and buttom clear grid 
resetButton.addEventListener('click', () => {
  let newSize = prompt('Enter number of squares per side (max number 100):');
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Invalid number. Please enter a number between 1 and 100.');
  }
});

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
  const squares = document.querySelectorAll('.gridSquare');

  squares.forEach(square => {
    square.style.backgroundColor = '';
    square.dataset.opacity = 0;
  });
});

