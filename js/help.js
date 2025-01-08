const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggle-btn');


toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('close');
  const isSidebarOpen = document.querySelector('.sidebar').classList.contains('close');
  if (isSidebarOpen) {
    toggleBtn.classList.remove('bx-menu-alt-right');
    toggleBtn.classList.add('bx-menu');
} else {
    toggleBtn.classList.remove('bx-menu');
    toggleBtn.classList.add('bx-menu-alt-right');
}

});
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



const starsContainer = document.getElementById("stars");
const totalStars = 5;
let rating = 0; 
for (let i = 1; i <= totalStars; i++) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("star-wrapper");
  wrapper.dataset.value = i;

  wrapper.innerHTML = `
    <span class="star-left">&#9733;</span>
    <span class="star-right">&#9733;</span>
  `;

  wrapper.addEventListener("click", (e) => {
    const isLeft = e.target.classList.contains("star-left");
    const value = parseFloat(wrapper.dataset.value);

    
    rating = isLeft ? value - 0.5 : value;

    updateStars();
  });

  starsContainer.appendChild(wrapper);
}


function updateStars() {
  document.querySelectorAll(".star-wrapper").forEach((star, index) => {
    const value = index + 1;

    
    if (rating >= value) {
      star.classList.add("active-left", "active-right");
    } else if (rating >= value - 0.5) {
      star.classList.add("active-left");
      star.classList.remove("active-right");
    } else {
      star.classList.remove("active-left", "active-right");
    }
  });
}