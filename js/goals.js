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
function ImageUpload() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageElement = document.getElementById('image');
                imageElement.src = e.target.result;
                imageElement.alt = 'Uploaded Goal Picture';
                imageElement.dataset.imageSrc = e.target.result; 
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    });
}

function addEntryToDom(event) {
    event.preventDefault();
    const d = new Date();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = d.getDate();
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();

    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry-div';

    const entryHeading = document.createElement('h3');
    entryHeading.className = 'single-entry-heading';
    entryHeading.textContent = document.querySelector('#entry-title').value;

    const entryDate = document.createElement('p');
    entryDate.className = 'single-entry-date';
    entryDate.textContent = `Date Added: ${day} ${month} ${year}`;

    const entryParagraph = document.createElement('p');
    entryParagraph.className = 'single-entry-text';
    entryParagraph.textContent = document.querySelector('#entry').value;

    const imageElement = document.createElement('img');
    const uploadedImage = document.getElementById('image').dataset.imageSrc;
    if (uploadedImage) {
        imageElement.src = uploadedImage;
        imageElement.alt = 'Uploaded Entry Image';
        imageElement.className = 'uploaded-image';
    }

    entryDiv.appendChild(entryHeading);
    entryDiv.appendChild(entryDate);
    if (uploadedImage) entryDiv.appendChild(imageElement);
    entryDiv.appendChild(entryParagraph);

    document.querySelector('.entryResultRow').appendChild(entryDiv);

    
    document.querySelector('#entry-title').value = '';
    document.querySelector('#entry').value = '';
    const previewImage = document.getElementById('image');
    previewImage.src = '';
    delete previewImage.dataset.imageSrc;
}

document.querySelector('#entryForm').addEventListener('submit', addEntryToDom);
