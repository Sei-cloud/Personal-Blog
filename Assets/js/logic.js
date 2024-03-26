// Dark mode switch
const themeSwitcher = document.querySelector('.mode-switch');
const container = document.querySelector('.container');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

// Check if mode is saved in local storage
let mode = localStorage.getItem('mode') || 'dark'; // Default to dark if not found

// Apply the initial mode
applyMode(mode);

// Function to apply mode
function applyMode(mode) {
  if (mode === 'dark') {
    moon.style.display = 'inline';
    sun.style.display = 'none';
    container.setAttribute('class', 'dark');
  } else {
    moon.style.display = 'none';
    sun.style.display = 'inline';
    container.setAttribute('class', 'light');
  }
}

// A click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  mode = mode === 'dark' ? 'light' : 'dark';
  localStorage.setItem('mode', mode);
  applyMode(mode);
});
