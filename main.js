const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

function updateToggleButtonText() {
  if (body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '화이트모드';
  } else {
    themeToggleBtn.textContent = '다크모드';
  }
}

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    // Default to light mode if no theme is saved
    body.classList.add('light-mode');
  }
  if (themeToggleBtn) { // Check if the button exists on the current page
    updateToggleButtonText(); // Set initial button text
  }
});

if (themeToggleBtn) { // Check if the button exists on the current page
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
    updateToggleButtonText(); // Update button text after theme change
  });
}

// Lottery generation logic (only if elements exist)
if (generateBtn && numbersContainer) {
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
}

// Contact form submission logic (only if elements exist)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);
    
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus.textContent = '문의가 성공적으로 접수되었습니다!';
        contactForm.reset(); // Clear the form
      } else {
        const data = await response.json();
        if (data.errors) {
          formStatus.textContent = data.errors.map(error => error.message).join(', ');
        } else {
          formStatus.textContent = '문의 접수에 실패했습니다. 다시 시도해주세요.';
        }
      }
    } catch (error) {
      formStatus.textContent = '네트워크 오류가 발생했습니다. 다시 시도해주세요.';
    }
  });
}