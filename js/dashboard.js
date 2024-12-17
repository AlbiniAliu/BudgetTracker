const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggle-btn');

// Add a click event listener to the toggle button
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});
