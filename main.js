const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    // Default to light mode if no theme is saved
    body.classList.add('light-mode');
  }
});

themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  }
});

generateBtn.addEventListener('click', () => {
  generateBtn.disabled = true;
  numbersContainer.innerHTML = '';
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  numbers.sort((a, b) => a - b);

  numbers.forEach((number, index) => {
    setTimeout(() => {
      const numberEl = document.createElement('div');
      numberEl.classList.add('number');
      numberEl.textContent = number;
      
      // Assign color based on number range
      if (number <= 10) {
        numberEl.dataset.color = 'yellow';
      } else if (number <= 20) {
        numberEl.dataset.color = 'blue';
      } else if (number <= 30) {
        numberEl.dataset.color = 'red';
      } else if (number <= 40) {
        numberEl.dataset.color = 'gray';
      } else {
        numberEl.dataset.color = 'green';
      }

      numbersContainer.appendChild(numberEl);

      if (index === numbers.length - 1) {
        generateBtn.disabled = false;
      }
    }, index * 500); // 500ms delay between each number
  });
});