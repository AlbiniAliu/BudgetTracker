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
const chartData = {
  labels: ["Groceries", "Entertainment", "Bills"],
  datasets: [
    {
      
      data: [30, 20, 50],
      backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
      hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"]
    }
  ]
};


const ctx = document.getElementById("myPieChart").getContext("2d");
const myPieChart = new Chart(ctx, {
  type: "pie",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      tooltip: {
        enabled: true
      }
    }
  }
});


document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const categoryName = document.getElementById("categoryName").value;
  const categoryValue = parseFloat(document.getElementById("categoryValue").value);
  if (!categoryName || isNaN(categoryValue)) {
    alert("Please enter valid data.");
    return;
  }

  
  chartData.labels.push(categoryName);
  chartData.datasets[0].data.push(categoryValue);

  
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  chartData.datasets[0].backgroundColor.push(randomColor);
  chartData.datasets[0].hoverBackgroundColor.push(randomColor);

  
  myPieChart.update();

  
  document.getElementById("categoryName").value = "";
  document.getElementById("categoryValue").value = "";
});
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
      alert("Ju lutem shkruani një task!");
      return;
  }

  
  const taskHTML = `
      <div class="task">
          
          <span>${taskText}</span>
          <input class="checkbox" type="checkbox" onchange="toggleTask(this)">
      </div>
  `;

  
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML += taskHTML;

  
  taskInput.value = "";
}

function toggleTask(checkbox) {
  const taskDiv = checkbox.parentElement; 

  
  if (checkbox.checked) {
      taskDiv.classList.add("completed"); 
  } else {
      taskDiv.classList.remove("completed");   
  }
}
function addRow() {
  
  const tableBody = document.getElementById('tableBody');

  
  const budgetName = document.getElementById('budgetName').value;
  const category = document.getElementById('category').value;
  const totalBudget = parseFloat(document.getElementById('totalBudget').value) || 0;
  const amountSpent = parseFloat(document.getElementById('amountSpent').value) || 0;
  const remainingAmount = totalBudget - amountSpent;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const percentage = (parseFloat(amountSpent) / parseFloat(totalBudget)) * 100;
  
  const newRow = document.createElement('tr');

  
  newRow.innerHTML = `
    <td>${budgetName}</td>
    <td>${category}</td>
    <td>${totalBudget.toFixed(2)}</td>
    <td>${amountSpent.toFixed(2)}</td>
    <td>${remainingAmount.toFixed(2)}</td>
    <td>${startDate}</td>
    <td>${endDate}</td>
    
    <td>${percentage.toFixed(2)+'%'}</td>
  `;

  
  tableBody.appendChild(newRow);

  
  document.getElementById('budgetName').value = '';
  document.getElementById('category').value = 'Housing';
  document.getElementById('totalBudget').value = '';
  document.getElementById('amountSpent').value = '';
  document.getElementById('remainingAmount').value = '';
  document.getElementById('startDate').value = '';
  document.getElementById('endDate').value = '';
  document.getElementById('percent').value = '';

}