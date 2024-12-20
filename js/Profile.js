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

document.addEventListener("DOMContentLoaded", () => {
    const profileInput = document.getElementById("profileInput");
    const profileImage = document.getElementById("profileImage");
    const uploadBtn = document.getElementById("uploadBtn");
  
    uploadBtn.addEventListener("click", () => {
      profileInput.click();
    });
  
    profileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file.");
      }
    });
  
  
    
    const editBtn = document.getElementById("EditBtn");
    const saveBtn = document.getElementById("SaveChangesBtn");
    const basicInfoFields = document.querySelectorAll("#BasicInfo p:not(:first-child)");
    const accountInfoFields = document.querySelectorAll("#AccountInfo p:not(:first-child)");
  
    editBtn.addEventListener("click", () => {
      basicInfoFields.forEach((field) => {
        const currentText = field.textContent;
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.className = "editable-input";
        field.replaceWith(input);
      });
  
      accountInfoFields.forEach((field) => {
        const currentText = field.textContent;
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.className = "editable-input";
        field.replaceWith(input);
      });
  
      editBtn.style.display = "none";
      saveBtn.style.display = "block";
    });
  
    saveBtn.addEventListener("click", () => {
      const editableInputs = document.querySelectorAll(".editable-input");
  
      editableInputs.forEach((input) => {
        const updatedText = input.value;
        const p = document.createElement("p");
        p.textContent = updatedText;
        input.replaceWith(p);
      });
  
      editBtn.style.display = "block";
      saveBtn.style.display = "none";
    });
  
    
    const deleteBtn = document.getElementById("DeleteAccountBtn");
    deleteBtn.addEventListener("click", () => {
      const confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone.");
      if (confirmDelete) {
        alert("Your account has been deleted.");
        
      }
    });
  

    const exportBtn = document.getElementById("ExportDataBtn");
    exportBtn.addEventListener("click", () => {
      alert("Your data has been exported successfully!");

    });
  });
  