// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-btn');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

// Function to retrieve URL parameters
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        username: urlParams.get('username'),
        title: urlParams.get('title'),
        content: urlParams.get('content')
    };
}

// Function to populate blog content
function populateBlogContent() {
    const params = getUrlParams();
    document.getElementById('username').innerText = params.username;
    document.getElementById('title').innerText = params.title;
    document.getElementById('content').innerText = params.content;
}

// Call populateBlogContent when the page loads
window.onload = populateBlogContent;


